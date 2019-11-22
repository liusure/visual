import React, {PureComponent} from 'react';
import Design from "@zent/design"
import {Consumer} from "../index/index"
import {request, api} from '@/utils/utils'
import {formatter, parseToTemplate} from '@/utils/conponentsFormatter'
import {
  SearchEditor,
  SearchPreview,
  MessageEditor,
  MessagePreview,
  SwiperEditor,
  SwiperPreview,
  GoodsListEditor,
  GoodsListPreview,
  ImageListEditor,
  ImageListPreview,
} from "../components"
import {Button, Dialog, Input} from "zent"
import '@zent/design/css/index.css';
import '@zent/design/css/components.css';
import {isArray} from "lodash"

const components = [{
  type: "search",
  // 渲染预览部分的组件
  preview: SearchPreview,
  // 渲染编辑部分的组件
  editor: SearchEditor,
  appendable: true,
  canDelete: true,
  canInsert: true,
  configurable: true,
  editable: false,
  highlightWhenSelect: true,
  dragable: true,
  editorProps: () => {
  },
  previewProps: () => {
  },
}, {
  type: "message",
  // 渲染预览部分的组件
  preview: MessagePreview,
  // 渲染编辑部分的组件
  editor: MessageEditor,
  appendable: true,
  canDelete: true,
  canInsert: true,
  editable: true,
  highlightWhenSelect: true,
  dragable: true,
  editorProps: () => {
  },
  previewProps: () => {
  },
}, {
  type: "swiper",
  // 渲染预览部分的组件
  preview: SwiperPreview,
  // 渲染编辑部分的组件
  editor: SwiperEditor,
  appendable: true,
  canDelete: true,
  canInsert: true,
  editable: true,
  highlightWhenSelect: true,
  dragable: true,
  editorProps: () => {
  },
  previewProps: () => {
  },
}, {
  type: "goods-list",
  // 渲染预览部分的组件
  preview: GoodsListPreview,
  // 渲染编辑部分的组件
  editor: GoodsListEditor,
  appendable: true,
  canDelete: true,
  canInsert: true,
  editable: true,
  highlightWhenSelect: true,
  dragable: true,
  editorProps: () => {
  },
  previewProps: () => {
  },
}, {
  type: "image-list",
  // 渲染预览部分的组件
  preview: ImageListPreview,
  // 渲染编辑部分的组件
  editor: ImageListEditor,
  appendable: true,
  canDelete: true,
  canInsert: true,
  editable: true,
  highlightWhenSelect: true,
  dragable: true,
  editorProps: () => {
  },
  previewProps: () => {
  },
}];

const {openDialog, closeDialog} = Dialog;

export default class ColumnDesigner extends PureComponent {

  state = {
    template: {},//模板详情
    value: []
  };

  componentDidMount() {
    setTimeout(() => {
      let {templateId} = this.indexContext;
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
          value: template.components
        })
      })
    }, 0)
  }

  onChange = newValue => {
    if (isArray(newValue)) {
      this.setState({
        value: newValue
      });
    } else if (newValue.type) {

    }
  };

  saveDesign = instance => {
    this.design = instance.getDecoratedComponentInstance();
  };

  onSaveClick() {
    let {templateName} = this.state;
    openDialog({
      dialogId: "saveTemplate",
      parentComponent: this,
      children: <div>
        <Input placeholder="请输入模板名称"
               value={templateName}
               onChange={(e) => this.setState({templateName: e.target.value})}/>
      </div>,
      footer: (<div><Button onClick={() => closeDialog('saveTemplate')}>关闭</Button><Button
        onClick={() => this.handleSave()}>保存</Button></div>),
    })
  }

  handleSave() {
    let template = parseToTemplate({
      ...this.state.template,
      components: this.state.value
    });
    request({
      url: api.saveTemplate,
      method: "POST",
      headers: {'content-type': 'application/json'},
      data: {
        template
      }
    })
  }

  render() {
    const {value} = this.props;
    return (
      <Consumer>
        {index => {
          this.indexContext = index;
          return (<div>
            <Design components={components}
                    onChange={this.onChange}
                    ref={this.saveDesign}
                    cache
                    cacheId="design-test"
                    confirmUnsavedLeave={false}
                    value={this.state.value}
                    globalConfig={window._global}></Design>
            <Button type="primary" onClick={this.onSaveClick.bind(this)}>保存</Button></div>)
        }}

      </Consumer>
    );
  }
}

