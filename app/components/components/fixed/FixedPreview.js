import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./FixedEditor"

import "./Fixed.less"

export default class FixedPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-fixed-preview">
        {value.content || PLACEHOLDER}
      </div>
    );
  }
}