import React from 'react';
import {Input} from 'zent';
import {contentType} from "@/constants";
import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';

import "./Video.less"

export const PLACEHOLDER = '此处显示视频';

export default class VideoEditor extends DesignEditor {

  render() {
    const {value: {content}, showError, validation} = this.props;

    return (
      <div className="rc-design-component-video-editor">
        <div className="rc-design-editor-component-title"></div>
      </div>
    );
  }

  static designType = 'video';
  static designDescription = '视频';

  static getInitialValue(settings, globalConfig) {
    return {
      contentType: contentType.CUSTOM,
      ctype: 24
    };
  }

  static validate(value) {
    return new Promise(resolve => {
      resolve(errors);
    });
  }
}