import React from 'react';
import {Input} from 'zent';
import {contentType} from "@/constants";
import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';

import "./GoodsStore.less"

export const PLACEHOLDER = '此处显示商品店铺';

export default class GoodsStoreEditor extends DesignEditor {

  render() {
    const {value: {content}, showError, validation} = this.props;

    return (
      <div className="rc-design-component-goods-store-editor">
        <div className="rc-design-editor-component-goods-store-title">此组件继承容器内容</div>
      </div>
    );
  }

  static designType = 'goods-store';
  static designDescription = '店铺信息';

  static getInitialValue(settings, globalConfig) {
    return {
      contentType: contentType.INHERIT,
      ctype: 25
    };
  }

  static validate(value) {
    return new Promise(resolve => {
      resolve(errors);
    });
  }
}