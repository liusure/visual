import React from 'react';
import {Input} from 'zent';

import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';

import "./GoodsTags.less"

export const PLACEHOLDER = '请填写内容，如果过长，将会在手机上滚动显示';

export default class GoodsTagsEditor extends DesignEditor {

  render() {
    const {value: {content}, showError, validation} = this.props;

    return (
      <div className="rc-design-component-message-editor">
        <div className="rc-design-editor-component-title">消息滚动</div>
        <ControlGroup
          label="公告:"
          required
          showError={showError || this.getMetaProperty('content', 'touched')}
          error={validation.content}
        >
          <Input
            name="content"
            placeholder={PLACEHOLDER}
            value={content}
            onChange={this.onInputChange}
          />
        </ControlGroup>
      </div>
    );
  }

  static designType = 'goods-tags';
  static designDescription = '商品标签';

  static getInitialValue(settings, globalConfig) {
    console.log("getInitialValue")
    return {
      content: '',
      scrollable: false
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