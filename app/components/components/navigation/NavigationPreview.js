import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./NavigationEditor"

import "./Navigation.less"

export default class NavigationPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-navigation-preview">
        {value.content || PLACEHOLDER}
      </div>
    );
  }
}