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
  GoodsDescEditor,
  GoodsDescPreview,
  GoodsRichTextEditor,
  GoodsRichTextPreview,
  GoodsTagsEditor,
  GoodsTagsPreview,
  GoodsSwiperEditor,
  GoodsSwiperPreview,
  GoodsInfoEditor,
  GoodsInfoPreview,
  GoodsIndexEditor,
  GoodsIndexPreview,
  SwiperEditor,
  SwiperPreview,
  GoodsListEditor,
  GoodsListPreview,
  ImageListEditor,
  ImageListPreview,
  GoodsRecommendEditor,
  GoodsRecommendPreview,
  GoodsStoreEditor,
  GoodsStorePreview,
  GuessYouLikeEditor,
  GuessYouLikePreview,
  GoodsInfoMiniEditor,
  GoodsInfoMiniPreview
} from "../components"
import {Button, Dialog, Input} from "zent"
import '@zent/design/css/index.css';
import '@zent/design/css/components.css';
import "./designer.less";

const components = [{
  type: "goods-store",
  // 渲染预览部分的组件
  preview: GoodsStorePreview,
  // 渲染编辑部分的组件
  editor: GoodsStoreEditor,
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
},{
  type: "guess-you-like",
  // 渲染预览部分的组件
  preview: GuessYouLikePreview,
  // 渲染编辑部分的组件
  editor: GuessYouLikeEditor,
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
  type: "goods-recommend",
  // 渲染预览部分的组件
  preview: GoodsRecommendPreview,
  // 渲染编辑部分的组件
  editor: GoodsRecommendEditor,
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
  type: "goods-swiper",
  // 渲染预览部分的组件
  preview: GoodsSwiperPreview,
  // 渲染编辑部分的组件
  editor: GoodsSwiperEditor,
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
  type: "goods-info",
  // 渲染预览部分的组件
  preview: GoodsInfoPreview,
  // 渲染编辑部分的组件
  editor: GoodsInfoEditor,
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
  type: "goods-info-mini",
  // 渲染预览部分的组件
  preview: GoodsInfoMiniPreview,
  // 渲染编辑部分的组件
  editor: GoodsInfoMiniEditor,
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
  type: "goods-index",
  // 渲染预览部分的组件
  preview: GoodsIndexPreview,
  // 渲染编辑部分的组件
  editor: GoodsIndexEditor,
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
  type: "goods-tags",
  // 渲染预览部分的组件
  preview: GoodsTagsPreview,
  // 渲染编辑部分的组件
  editor: GoodsTagsEditor,
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
  type: "goods-richText",
  // 渲染预览部分的组件
  preview: GoodsRichTextPreview,
  // 渲染编辑部分的组件
  editor: GoodsRichTextEditor,
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
  type: "goods-desc",
  // 渲染预览部分的组件
  preview: GoodsDescPreview,
  // 渲染编辑部分的组件
  editor: GoodsDescEditor,
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

export default class GoodsDesigner extends PureComponent {

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

