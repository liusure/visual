import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./ImageListEditor"
import "./ImageList.less"

const ITEM_TYPES = {
  0: "专题",
  1: "商品",
  2: "文章",
  3: "活动",
  4: "外链",
  5: "任务",
  6: "包",
  7: "文本",
  8: "店铺",
}
export default class ImageListPreview extends PureComponent {
  render() {
    const {value} = this.props;
    let {
      selectType,
      rowColCount,
      items,
    } = value;
    return (
      <div className="rc-design-component-image-list-preview">
        <ul className="image-layout-container">
          {items.map((item, index) => (
            <li key={index} className={`image-layout-wrapper  col-count-${rowColCount}`}>
              <img className={`image`} src={item.url}></img>
            </li>)) || PLACEHOLDER}
        </ul>
      </div>
    );
  }
}