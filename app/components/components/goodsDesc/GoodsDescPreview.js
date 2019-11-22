import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./GoodsDescEditor"

import "./GoodsDesc.less"

export default class GoodsDescPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-message-preview">
        {value.content||PLACEHOLDER}
      </div>
    );
  }
}