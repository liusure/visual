import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./GoodsSwiperEditor"
import {Swiper, Image} from "zent"
import "./GoodsSwiper.less"

export default class GoodsSwiperPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-swiper-preview">
        {value.items.length > 0 ? (<Swiper autoplay
                                            autoplayInterval={2000}>{value.items.map((item, index) => <div
          className="swiper-demo-simple-h"
          key={index}><img className="swiper-img" src={item.url}/>
        </div>)}</Swiper>) : PLACEHOLDER
        }
      </div>
    );
  }
}