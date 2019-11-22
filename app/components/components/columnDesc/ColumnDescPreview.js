import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./ColumnDescEditor"

import "./ColumnDesc.less"

export default class ColumnDescPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-message-preview">
        此处显示专题简介
      </div>
    );
  }
}