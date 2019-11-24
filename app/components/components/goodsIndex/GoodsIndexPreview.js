import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./GoodsIndexEditor"

import "./GoodsIndex.less"

export default class GoodsIndexPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-goods-index-preview">
        {value.content || PLACEHOLDER}
      </div>
    );
  }
}