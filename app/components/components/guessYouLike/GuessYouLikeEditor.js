import React from 'react';
import {Input} from 'zent';
import {contentType} from "@/constants";
import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';

import "./GuessYouLike.less"

export const PLACEHOLDER = '此处显示猜你喜欢';

export default class GuessYouLikeEditor extends DesignEditor {

  render() {
    const {value: {content}, showError, validation} = this.props;

    return (
      <div className="rc-design-component-guess-you-like-editor">
        <div className="rc-design-editor-component-title">此组件无需编辑内容</div>
      </div>
    );
  }

  static designType = 'guess-you-like';
  static designDescription = '猜你喜欢';

  static getInitialValue(settings, globalConfig) {
    return {
      contentType: contentType.INHERIT,
      ctype: 21
    };
  }

  static validate(value) {
    return new Promise(resolve => {
      resolve(errors);
    });
  }
}