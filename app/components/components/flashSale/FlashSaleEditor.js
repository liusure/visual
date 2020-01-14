import React from 'react';
import {Input} from 'zent';
import {contentType} from "@/constants";
import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';

import "./FlashSale.less"

export const PLACEHOLDER = '此处显示秒杀商品';

export default class FlashSaleEditor extends DesignEditor {

  render() {
    const {value: {content}, showError, validation} = this.props;

    return (
      <div className="rc-design-component-flash-sale-editor">
        <div className="rc-design-editor-component-title">此组件无需编辑内容</div>
      </div>
    );
  }

  static designType = 'flash-sale';
  static designDescription = '秒杀组件';

  static getInitialValue(settings, globalConfig) {
    return {
      contentType: contentType.INHERIT,
      ctype: 29
    };
  }

  static validate(value) {
    return new Promise(resolve => {
      resolve(errors);
    });
  }
}