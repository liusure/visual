import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./ReadingCenterEditor"

import "./ReadingCenter.less"

export default class ReadingCenterPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-reading-center-preview">
        {value.content || PLACEHOLDER}
      </div>
    );
  }
}