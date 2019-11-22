import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./MessageEditor"

import "./ColumnDesc.less"

export default class ColumnDescPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-message-preview">
        {value.content||PLACEHOLDER}
      </div>
    );
  }
}