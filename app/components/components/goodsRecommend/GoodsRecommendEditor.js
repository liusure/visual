import React from 'react';
import {Input} from 'zent';
import {contentType} from "@/constants";
import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';

import "./GoodsRecommend.less"

export const PLACEHOLDER = '此处显示同类推荐';

export default class GoodsRecommendEditor extends DesignEditor {

  render() {
    const {value: {content}, showError, validation} = this.props;

    return (
      <div className="rc-design-component-goods-recommend-editor">
        <div className="rc-design-editor-component-title">此组件无需编辑内容</div>
      </div>
    );
  }

  static designType = 'goods-recommend';
  static designDescription = '同类推荐';

  static getInitialValue(settings, globalConfig) {
    return {
      contentType: contentType.INHERIT,
      ctype: 22
    };
  }

  static validate(value) {
    return new Promise(resolve => {
      resolve(errors);
    });
  }
}