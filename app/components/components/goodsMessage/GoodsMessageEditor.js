import React from 'react';
import {Input} from 'zent';
import {contentType} from "@/constants";
import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';

import "./GoodsMessage.less"

export const PLACEHOLDER = '此处显示订单滚动';

export default class GoodsMessageEditor extends DesignEditor {

  render() {
    const {value: {content}, showError, validation} = this.props;

    return (
      <div className="rc-design-component-goods-message-editor">
        <div className="rc-design-editor-component-title">此组件无需编辑内容</div>
      </div>
    );
  }

  static designType = 'goods-message';
  static designDescription = '诱导订单滚动';

  static getInitialValue(settings, globalConfig) {
    return {
      contentType: contentType.INHERIT,
      ctype: 27
    };
  }

  static validate(value) {
    return new Promise(resolve => {
      resolve(errors);
    });
  }
}