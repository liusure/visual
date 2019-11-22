import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./SearchEditor"
import {Icon} from "zent"
import "./Search.less"

export default class SearchPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-search-preview">
        <div className="search-wrapper">
          <Icon type="search"></Icon>
        </div>
      </div>
    );
  }
}