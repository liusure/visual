import React from 'react';
import {Input} from 'zent';
import {contentType} from "@/constants";
import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';

import "./GoodsInfoMini.less"

export const PLACEHOLDER = '此处显示商品目录';

export default class GoodsInfoMiniEditor extends DesignEditor {

  render() {
    const {value: {content}, showError, validation} = this.props;

    return (
      <div className="rc-design-component-goods-info-mini-editor">
        <div className="rc-design-editor-component-mini-title">此组件继承容器内容</div>
      </div>
    );
  }

  static designType = 'goods-index';
  static designDescription = '商品目录';

  static getInitialValue(settings, globalConfig) {
    return {
      contentType: contentType.INHERIT,
      ctype: 16
    };
  }

  static validate(value) {
    return new Promise(resolve => {
      resolve(errors);
    });
  }
}