import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./GoodsStoreEditor"

import "./GoodsStore.less"

export default class GoodsStorePreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-goods-store-preview">
        {value.content || PLACEHOLDER}
      </div>
    );
  }
}