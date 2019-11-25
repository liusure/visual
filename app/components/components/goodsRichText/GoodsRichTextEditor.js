import React from 'react';
import {Input} from 'zent';

import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';

import "./GoodsRichText.less"

export const PLACEHOLDER = '此处显示富文本内容';

export default class GoodsRichTextEditor extends DesignEditor {

  render() {
    const {value: {content}, showError, validation} = this.props;

    return (
      <div className="rc-design-component-goods-rich-text-editor">
        <div className="rc-design-editor-component-title">此组件继承容器内容</div>
      </div>
    );
  }

  static designType = 'goods-richText';
  static designDescription = '商品富文本';

  static getInitialValue(settings, globalConfig) {
    return {
      content: '',
      scrollable: false,
      ctype:13
    };
  }

  static validate(value) {
    return new Promise(resolve => {
      const errors = {};
      resolve(errors);
    });
  }
}