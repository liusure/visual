import React, {PureComponent} from 'react';
import {PLACEHOLDER} from "./GoodsScrollEditor"
import {Swiper, Image} from "zent"
import "./GoodsScroll.less"

export default class GoodsScrollPreview extends PureComponent {
  render() {
    const {value} = this.props;
    return (
      <div className="rc-design-component-goods-scroll-preview">
        {value.items.length > 0 ? (<Swiper autoplay
                                            autoplayInterval={2000}>{value.items.map((item, index) => <div
          className="goods-scroll-demo-simple-h"
          key={index}><img className="goods-scroll-img" src={item.url}/>
        </div>)}</Swiper>) : <div className="no_data">{PLACEHOLDER}</div>
        }
      </div>
    );
  }
}