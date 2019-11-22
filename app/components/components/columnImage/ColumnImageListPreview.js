import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./ImageListEditor"

import "./ColumnImageList.less"

export default class ColumnImageListPreview extends PureComponent {
  render() {
    const {value} = this.props;
    let {
      selectType,
      columnCount,
      relation,
      relationItemId,
      items,
    } = value;
    return (
      <div className="rc-design-component-image-list-preview">
        <ul className="image-layout-container">
          {value.items.map((item, index) => (
            <li key={index} className={`image-layout-wrapper  col-count-${columnCount}`}>
              <img className={`image`} src={item.url}></img>
            </li>)) || PLACEHOLDER}
        </ul>
      </div>
    );
  }
}