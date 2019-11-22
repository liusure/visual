import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./ColumnImageEditor"

import "./ColumnImage.less"

export default class ColumnImagePreview extends PureComponent {
  render() {
    const {value} = this.props
    return (
      <div className="rc-design-component-column-image-list-preview">
        此处显示专题头图
      </div>
    );
  }
}