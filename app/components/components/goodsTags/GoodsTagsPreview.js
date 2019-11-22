import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./GoodsTagsEditor"

import "./GoodsTags.less"

export default class GoodsTagsPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-message-preview">
        {value.content||PLACEHOLDER}
      </div>
    );
  }
}