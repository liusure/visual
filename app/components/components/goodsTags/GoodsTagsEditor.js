import React from 'react';
import {Input} from 'zent';

import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';

import "./GoodsTags.less"

export const PLACEHOLDER = '请填写内容，如果过长，将会在手机上滚动显示';

export default class GoodsTagsEditor extends DesignEditor {

  render() {
    const {value: {content}, showError, validation} = this.props;

    return (
      <div className="rc-design-component-message-editor">
        <div className="rc-design-editor-component-title">此组件继承容器内容</div>
      </div>
    );
  }

  static designType = 'goods-tags';
  static designDescription = '商品标签';

  static getInitialValue(settings, globalConfig) {
    return {
      content: '',
      scrollable: false,
      ctype:12
    };
  }

  static validate(value) {
    return new Promise(resolve => {
      const errors = {};
      const {content} = value;
      if (!content || !content.trim()) {
        errors.content = '请填写公告内容';
      }

      resolve(errors);
    });
  }
}