import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./GoodsInfoEditor"

import "./GoodsInfo.less"

export default class GoodsInfoPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-goods-info-preview">
        {value.content||PLACEHOLDER}
      </div>
    );
  }
}