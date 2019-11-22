import React from 'react';
import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';
import {contentType} from "@/constants";
import "./ColumnImage.less"

export default class ColumnImageEditor extends DesignEditor {

  state = {}

  componentDidMount() {
  }

  render() {
    return (
      <div className="rc-design-component-column-image-list-editor"></div>
    );
  }

  static designType = 'column-image';
  static designDescription = '栏目头图';

  static getInitialValue(settings, globalConfig) {
    return {
      contentType: contentType.INHERIT,
      ctype: 9
    };
  }

  static validate(value) {
    return new Promise(resolve => {
      resolve();
    });
  }
}