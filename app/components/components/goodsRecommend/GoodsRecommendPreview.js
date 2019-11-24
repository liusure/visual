import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./GoodsRecommendEditor"

import "./GoodsRecommend.less"

export default class GoodsRecommendPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-goods-recommend-preview">
        {value.content || PLACEHOLDER}
      </div>
    );
  }
}