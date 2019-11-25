import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./ActivityEditor"

import "./Activity.less"

export default class ActivityPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-activity-preview">
        {value.content || PLACEHOLDER}
      </div>
    );
  }
}