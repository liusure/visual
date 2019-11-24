import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./GoodsInfoMiniEditor"

import "./GoodsInfoMini.less"

export default class GoodsInfoMiniPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-goods-info-mini-preview">
        {value.content || PLACEHOLDER}
      </div>
    );
  }
}