import {componentsConfig} from '../constants'
import Template from '../components/model/Template'
import TemplateArea from '../components/model/TemplateArea'
import TemplateAreaItem from '../components/model/TemplateAreaItem'
import {map} from "lodash"

export function formatter(data) {
  let template = new Template({
    ...data
  });
  for (let area of data.items) {
    let templateArea = new TemplateArea({
      ...area
    })
    for (let item of area.items) {
      let templateItem = new TemplateAreaItem({
        ...item
      })
      templateArea.items.push(templateItem);
    }
    template.items.push(templateArea);
  }
  return templateToComponents(template);
}

export function parseToTemplate(template) {
  let templateAreas = [];
  let index = 0;
  for (let component of template.components) {
    let templateArea = new TemplateArea({...component});
    let config = componentsConfig[templateArea.ctype];
    templateArea.items = config.mapTemplateItem(component);
    templateArea.orderId = template.components.length - index++;
    templateAreas.push(templateArea);
  }
  return {
    ...template,
    items: templateAreas
  }
}

function templateToComponents(template) {
  let components = [];
  for (let area of template.items) {
    let component = getComponent(area);
    console.log(area)
    console.log(component)
    if (component && component.parameter.type) components.push(component.parameter);
  }
  return {
    ...template,
    components
  };
}

function getComponent(area) {
  let config = componentsConfig[area.ctype];
  if (config && config.toComponent) {
    config = {...area, ...config, ...config.toComponent(area)}
    return new Component(config)
  }
}

class Component {
  parameter;
  default = {
    type: ""
  }

  constructor(params) {
    this.parameter = Object.assign({}, this.default, params);
  }
}