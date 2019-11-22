import React from 'react';
import {Input} from 'zent';

import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';

import "./Search.less"

export const PLACEHOLDER = '请填写内容，如果过长，将会在手机上滚动显示';

export default class SearchEditor extends DesignEditor {

  render() {
    const {value, showError, validation} = this.props;

    return (
      <div className="rc-design-component-search-editor"></div>
    );
  }

  static designType = 'search';
  static designDescription = '搜索';

  static getInitialValue(settings, globalConfig) {
    return {
      content: '',
      ctype:8
    };
  }

  static validate(value) {
    return new Promise(resolve => {
      const errors = {};
      const {content} = value;
      if (!content || !content.trim()) {
        errors.content = '请填写公告内容';
      }
      resolve(errors);
    });
  }
}