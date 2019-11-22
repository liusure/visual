import React, {PureComponent} from 'react';
import {Tabs} from 'zent';
import qs from 'qs'
import IndexDesigner from '../designer/IndexDesigner'
import GoodsDesigner from '../designer/GoodsDesigner'
import ColumnDesigner from '../designer/ColumnDesigner'
import {api, request} from "@/utils/utils";
import {formatter} from "@/utils/conponentsFormatter";

const {TabPanel} = Tabs;
const {Consumer, Provider} = React.createContext()
export {Consumer};
export default class NoticePreview extends PureComponent {

  state = {
    template: null,//模板详情
    activeId: '1',
    params: {}
  };

  componentDidMount() {
    if (window.location.href.indexOf("?") != -1) {
      let params = qs.parse(window.location.href.substring(window.location.href.indexOf("?") + 1))
      this.setState({
        params: {
          ...params
        }
      }, () => {
        this.fetchTemplate();
      })
    }
  }

  fetchTemplate() {
    setTimeout(() => {
      let {templateId} = this.state.params;
      request({
        url: api.template,
        params: {
          templateId
        }
      }).then((res) => {
        let template = formatter(res.item);
        console.log(template)
        this.setState({
          template,
          activeId:template.ctype+""
        })
      })
    }, 0)
  }

  onTabChange = id => {
    this.setState({
      activeId: id,
    });
  };

  onChange(newValue) {
    this.setState({
      value: newValue
    });
  }

  onSaved() {
    this.fetchTemplate();
  }

  render() {
    const {template} = this.state;
    return (<Provider value={{templateId: this.state.params.templateId}}>
      <Tabs activeId={this.state.activeId} onChange={this.onTabChange} align="right">
        <TabPanel tab="首页模板" id="0">
          {template ? (<IndexDesigner template={template} onSaved={this.onSaved.bind(this)}></IndexDesigner>) : null}
        </TabPanel>
        <TabPanel tab="专题模板" id="1">
          {template ? (<ColumnDesigner template={template} onSaved={this.onSaved.bind(this)}></ColumnDesigner>) : null}
        </TabPanel>
        <TabPanel tab="商品模板" id="2">
          {template ? (<GoodsDesigner template={template} onSaved={this.onSaved.bind(this)}></GoodsDesigner>) : null}
        </TabPanel>
      </Tabs>
    </Provider>);
  }
}