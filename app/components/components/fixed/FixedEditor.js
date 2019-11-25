import React from 'react';
import {Input} from 'zent';
import {contentType} from "@/constants";
import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';

import "./Fixed.less"

export const PLACEHOLDER = '此处显示底部浮动';

export default class FixedEditor extends DesignEditor {

  render() {
    const {value: {content}, showError, validation} = this.props;

    return (
      <div className="rc-design-component-fixed-editor">
        <div className="rc-design-editor-component-title"></div>
      </div>
    );
  }

  static designType = 'fixed';
  static designDescription = '底部浮动';

  static getInitialValue(settings, globalConfig) {
    return {
      contentType: contentType.INHERIT,
      ctype: 19
    };
  }

  static validate(value) {
    return new Promise(resolve => {
      resolve(errors);
    });
  }
}