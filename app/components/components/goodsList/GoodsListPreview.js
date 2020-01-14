import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./GoodsListEditor"

import "./GoodsList.less"
import {mediaUrlFormat} from "@/utils/utils";

const default_img = "https://tenfen-video.oss-cn-beijing.aliyuncs.com/visual_default_background.webp";
export default class GoodsListPreview extends PureComponent {
  render() {
    const {value, value: {rowColCount, items, contentType}} = this.props;
    return (
      <div className="rc-design-component-goods-list-preview">{
        contentType == 1 ? (
          <div className="empty">显示专题内容</div>
        ) : (
          <ul className="goods-layout-container">
            {
              items.map((item, index) => (
                <li className={`goods-layout-wrapper col-count-${rowColCount}`} key={index}>
                  <a className="goods-image-wrapper-a">
                    <div className="goods-image-wrapper">
                      <div className="goods-image"
                           style={{'backgroundImage': `URL(${item.imageUrls && mediaUrlFormat(item.imageUrls[0])||default_img})`}}></div>
                    </div>
                    <div className="goods-info">
                      <div className="goods-title">{item.name}</div>
                      <div className="goods-detail">{`￥${item.price / 100}`}</div>
                    </div>
                  </a>
                </li>)) || PLACEHOLDER
            }
          </ul>)
      }</div>
    );
  }
}