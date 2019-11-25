import React from 'react';
import {Input} from 'zent';
import {contentType} from "@/constants";
import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';

import "./Activity.less"

export const PLACEHOLDER = '此处显示活动';

export default class ActivityEditor extends DesignEditor {

  render() {
    const {value: {content}, showError, validation} = this.props;

    return (
      <div className="rc-design-component-activity-editor">
        <div className="rc-design-editor-component-title"></div>
      </div>
    );
  }

  static designType = 'activity';
  static designDescription = '活动';

  static getInitialValue(settings, globalConfig) {
    return {
      contentType: contentType.INHERIT,
      ctype: 26
    };
  }

  static validate(value) {
    return new Promise(resolve => {
      resolve(errors);
    });
  }
}