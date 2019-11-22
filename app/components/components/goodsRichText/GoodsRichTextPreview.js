import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./GoodsRichTextEditor"

import "./GoodsRichText.less"

export default class GoodsRichTextPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-goods-rich-text-preview">
        {value.content || PLACEHOLDER}
      </div>
    );
  }
}