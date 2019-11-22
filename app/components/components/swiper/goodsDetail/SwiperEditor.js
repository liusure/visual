import React from 'react';
import {Dialog, Select} from 'zent';
import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';
import EditorCard from '../../common/EditorCard';
import ImageSelector from '../../common/ImageSelector';
import {cloneDeep} from "lodash"
import "./swiper.less"

export const PLACEHOLDER = '请选择图片';
const {Option} = Select;
const {openDialog, closeDialog} = Dialog;
export default class SwiperEditor extends DesignEditor {

  onCardAddClick() {
    let {value: {images}} = this.props;
    openDialog({
      dialogId: "chooseImages",
      parentComponent: this,
      children: (<div>
        <ImageSelector onConfirm={this.onImagesConfirm.bind(this)} images={[...images]}></ImageSelector>
      </div>),
    });
  }

  onImagesConfirm({images}) {
    let {value, onChange} = this.props;
    onChange && onChange({
      ...value,
      images
    });
    closeDialog('chooseImages');
  }

  render() {
    const {value, showError, validation} = this.props;

    return (
      <div className="rc-design-component-swiper-editor">
        <div className="rc-design-editor-component-title">轮播图片</div>
        <ControlGroup
          label="商品:"
          required
          showError={showError || this.getMetaProperty('content', 'touched')}
          error={validation.content}
        >
          <Select
            name="columnCount"
            placeholder="选择商品"
            onChange={this.onInputChange}
            value={columnCount}
          >
            <Option value="1">1</Option>
            <Option value="2">2</Option>
          </Select>
        </ControlGroup>
      </div>
    );
  }

  static designType = 'goods-swiper';
  static designDescription = '商品页图片轮播';

  static getInitialValue(settings, globalConfig) {
    return {
      images: [
        {url: "https://img.yzcdn.cn/public_files/2018/01/30/585dae8447d80013ef9344adc973c6ee.png?imageView2%2F2%2Fw%2F520%2Fh%2F0%2Fq%2F75%2Fformat%2Fwebp"},
        {url: "https://img.yzcdn.cn/public_files/2018/01/30/585dae8447d80013ef9344adc973c6ee.png?imageView2%2F2%2Fw%2F520%2Fh%2F0%2Fq%2F75%2Fformat%2Fwebp"},
        {url: "https://img.yzcdn.cn/public_files/2018/01/30/585dae8447d80013ef9344adc973c6ee.png?imageView2%2F2%2Fw%2F520%2Fh%2F0%2Fq%2F75%2Fformat%2Fwebp"},
        {url: "https://img.yzcdn.cn/public_files/2018/01/30/585dae8447d80013ef9344adc973c6ee.png?imageView2%2F2%2Fw%2F520%2Fh%2F0%2Fq%2F75%2Fformat%2Fwebp"},
        {url: "https://img.yzcdn.cn/public_files/2018/01/30/585dae8447d80013ef9344adc973c6ee.png?imageView2%2F2%2Fw%2F520%2Fh%2F0%2Fq%2F75%2Fformat%2Fwebp"},
      ]
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