import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./FlashSaleEditor"

import "./FlashSale.less"

export default class FlashSalePreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-flash-sale-preview">
        {value.content || PLACEHOLDER}
      </div>
    );
  }
}