import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./GoodsRichTextEditor"

import "./GoodsRichText.less"

export default class GoodsRichTextPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-message-preview">
        {value.content||PLACEHOLDER}
      </div>
    );
  }
}