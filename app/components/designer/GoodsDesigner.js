import React, {PureComponent} from 'react';
import Design from "@zent/design"
import {Consumer} from "../index/index"
import {request, api} from '@/utils/utils'
import {formatter, parseToTemplate} from '@/utils/conponentsFormatter'
import {
  SearchEditor,
  SearchPreview,
  GoodsDesc,
  GoodsDescPreview,
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
import "./designer.less";

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
  preview: GoodsDescPreview,
  // 渲染编辑部分的组件
  editor: GoodsDesc,
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

export default class IndexDesigner extends PureComponent {

  constructor() {
    super();
    this.state = {
      template: {},
      value: [],
      showSaveDialog: false
    };
  }

  componentDidMount() {
    let {template} = this.props;
    this.setState({
      template: template,
      value: template.components
    })
  }

  onChange = newValue => {
    console.log(newValue)
    this.setState({
      value: newValue
    });
  };

  saveDesign = instance => {
    this.design = instance.getDecoratedComponentInstance();
  };

  onSaveClick() {
    this.setState({
      showSaveDialog: true
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
    }).then((res) => {
      this.setState({
        showSaveDialog: false
      })
    })
  }

  render() {
    const {template} = this.props;
    const {showSaveDialog, value} = this.state;
    return (<div className="designer-container">
      <Design components={components}
              onChange={this.onChange.bind(this)}
              ref={this.saveDesign}
              cache
              cacheId="design-test"
              confirmUnsavedLeave={false}
              value={value}
              globalConfig={window._global}></Design>
      <Dialog className="save-template-dialog"
              visible={showSaveDialog}
              onClose={() => this.setState({showSaveDialog: false})}
              footer={<div><Button onClick={() => this.setState({showSaveDialog: false})}>关闭</Button><Button
                onClick={this.handleSave.bind(this)}>保存</Button></div>}
      >
        <Input
          className="zent-input-wrapper"
          placeholder="请输入模板名称"
          value={template.name}
          onChange={(e) => this.setState({template: {...template, name: e.target.value}})}/>
        <Input
          type="textarea"
          className="zent-input-wrapper"
          placeholder="请输入模板简介"
          value={template.descContent}
          onChange={(e) => this.setState({template: {...template, descContent: e.target.value}})}/>
      </Dialog>
      <Button type="primary" onClick={this.onSaveClick.bind(this)}>保存</Button></div>)
  }
}

