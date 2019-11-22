import React from 'react';
import {Dialog} from 'zent';
import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';
import EditorCard from '../../common/EditorCard';
import ImageSelector from '../../common/ImageSelector';
import {contentType} from "@/constants";
import "./GoodsSwiper.less"

export const PLACEHOLDER = '请选择图片';
const {openDialog, closeDialog} = Dialog;
export default class GoodsSwiperEditor extends DesignEditor {

  onCardAddClick() {
    let {value: {id, items}} = this.props;//这里的id是areaId
    openDialog({
      dialogId: "chooseImages",
      parentComponent: this,
      children: (<div>
        <ImageSelector areaId={id} onConfirm={this.onImagesConfirm.bind(this)} items={[...items]}></ImageSelector>
      </div>),
    });
  }

  onImagesConfirm({items}) {
    let {value, onChange} = this.props;
    items.map((item) => ({
      ...item
    }))
    onChange && onChange({
      ...value,
      items
    });
    closeDialog('chooseImages');
  }

  render() {
    const {value, showError, validation} = this.props;

    return (
      <div className="rc-design-component-goods-swiper-editor">
        <div className="rc-design-editor-component-title">此组件继承容器内容</div>
      </div>
    );
  }

  static designType = 'goods-swiper';
  static designDescription = '商品图片轮播';

  static getInitialValue(settings, globalConfig) {
    return {
      contentType: contentType.INHERIT,
      ctype: 14
    };
  }

  static validate(value) {
    return new Promise(resolve => {
      const errors = {};
      const {items} = value;
      if (!items || items.length === 0) {
        errors.content = '请选择图片';
      }

      resolve(errors);
    });
  }
}