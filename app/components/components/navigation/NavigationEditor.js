import React from 'react';
import {Input} from 'zent';
import {contentType} from "@/constants";
import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';

import "./Navigation.less"

export const PLACEHOLDER = '此处显示导航栏';

export default class NavigationEditor extends DesignEditor {

  render() {
    const {value: {content}, showError, validation} = this.props;

    return (
      <div className="rc-design-component-navigation-editor">
        <div className="rc-design-editor-component-title">待开发</div>
      </div>
    );
  }

  static designType = 'navigation';
  static designDescription = '导航';

  static getInitialValue(settings, globalConfig) {
    return {
      contentType: contentType.CUSTOM,
      ctype: 1,
      items:[]
    };
  }

  static validate(value) {
    return new Promise(resolve => {
      resolve(errors);
    });
  }
}