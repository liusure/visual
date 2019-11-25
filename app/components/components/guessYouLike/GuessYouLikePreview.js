import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./GuessYouLikeEditor"

import "./GuessYouLike.less"

export default class GuessYouLikePreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-guess-you-like-preview">
        {value.content || PLACEHOLDER}
      </div>
    );
  }
}