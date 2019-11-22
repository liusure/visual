import React from 'react';
import {Input} from 'zent';
import {contentType} from "@/constants";
import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';

import "./GoodsInfo.less"

export const PLACEHOLDER = '此处显示商品信息（价格等）';

export default class GoodsInfoEditor extends DesignEditor {

  render() {
    const {value: {content}, showError, validation} = this.props;

    return (
      <div className="rc-design-component-goods-info-editor">
        <div className="rc-design-editor-component-title">此组件继承容器内容</div>
      </div>
    );
  }

  static designType = 'goods-info';
  static designDescription = '商品信息';

  static getInitialValue(settings, globalConfig) {
    return {
      contentType: contentType.INHERIT,
      ctype: 15
    };
  }

  static validate(value) {
    return new Promise(resolve => {
      const errors = {};
      resolve(errors);
    });
  }
}