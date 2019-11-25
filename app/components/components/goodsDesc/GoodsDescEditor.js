import React from 'react';
import {Input} from 'zent';

import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';

import "./GoodsDesc.less"

export const PLACEHOLDER = '请填写内容，如果过长，将会在手机上滚动显示';

export default class GoodsDescEditor extends DesignEditor {

  render() {
    const {value: {content}, showError, validation} = this.props;

    return (
      <div className="rc-design-component-message-editor">
        <div className="rc-design-editor-component-title">此组件继承容器内容</div>
      </div>
    );
  }

  static designType = 'goods-desc';
  static designDescription = '商品介绍';

  static getInitialValue(settings, globalConfig) {
    return {
      content: '',
      scrollable: false,
      ctype: 11
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