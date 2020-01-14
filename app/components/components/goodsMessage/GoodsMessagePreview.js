import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./GoodsMessageEditor"

import "./GoodsMessage.less"

export default class GoodsMessagePreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-goods-message-preview">
        {value.content || PLACEHOLDER}
      </div>
    );
  }
}