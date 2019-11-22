import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./MessageEditor"

import "./Message.less"

export default class MessagePreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-message-preview">
        {value.content||PLACEHOLDER}
      </div>
    );
  }
}