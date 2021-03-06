import React from 'react';
import {Input} from 'zent';
import {contentType} from '@/constants';

import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';

import "./ColumnDesc.less"

export const PLACEHOLDER = '请填写内容，如果过长，将会在手机上滚动显示';

export default class ColumnDescEditor extends DesignEditor {

  render() {
    const {value: {content}, showError, validation} = this.props;

    return (
      <div className="rc-design-component-column-desc-editor">
        <div className="rc-design-editor-component-title">此组件继承容器内容</div>
      </div>
    );
  }

  static designType = 'column-desc';
  static designDescription = '栏目介绍';

  static getInitialValue(settings, globalConfig) {
    return {
      contentType: contentType.INHERIT,
      ctype: 10
    };
  }

  static validate(value) {
    return new Promise(resolve => {
      resolve();
    });
  }
}