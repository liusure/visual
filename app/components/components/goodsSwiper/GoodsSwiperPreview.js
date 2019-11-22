import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./GoodsSwiperEditor"
import {Swiper, Image} from "zent"
import "./GoodsSwiper.less"

export default class GoodsSwiperPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-goods-swiper-preview">
        此处显示商品图片
      </div>
    );
  }
}