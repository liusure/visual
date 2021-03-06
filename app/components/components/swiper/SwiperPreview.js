import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./SwiperEditor"
import {Swiper, Image} from "zent"
import "./Swiper.less"

export default class SwiperPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-swiper-preview">
        {value.items.length > 0 ? (<Swiper autoplay
                                            autoplayInterval={3000}>{value.items.map((item, index) => <div
          className="swiper-demo-simple-h"
          key={index}><img className="swiper-img" src={item.url}/>
        </div>)}</Swiper>) : <div className="no_data">{PLACEHOLDER}</div>
        }
      </div>
    );
  }
}