import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./VideoEditor"

import "./Video.less"

export default class VideoPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-video-preview">
        {value.content || PLACEHOLDER}
      </div>
    );
  }
}