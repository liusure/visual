import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./GoodsScrollEditor"
import {Swiper, Image} from "zent"
import "./GoodsScroll.less"
import {mediaUrlFormat} from "@/utils/utils";
const default_img = "https://tenfen-video.oss-cn-beijing.aliyuncs.com/visual_default_background.webp";

export default class GoodsScrollPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-goods-scroll-preview">
        {value.items.length > 0 ? (<Swiper autoplay
                                            autoplayInterval={3000}>{value.items.map((item, index) => <div
          className="goods-scroll-demo-simple-h"
          key={index}>
          <a className="goods-scroll-image-wrapper-a">
            <div className="goods-scroll-image-wrapper">
              <div className="goods-scroll-image"
                   style={{'backgroundImage': `URL(${item.imageUrls && mediaUrlFormat(item.imageUrls[0])||default_img})`}}></div>
            </div>
            <div className="goods-scroll-info">
              <div className="goods-scroll-title">{item.name}</div>
              <div className="goods-scroll-detail">{`抢购价:￥${item.groupPrice / 100}`}</div>
            </div>
          </a>
        </div>)}</Swiper>) : <div className="no_data">{PLACEHOLDER}</div>
        }
      </div>
    );
  }
}