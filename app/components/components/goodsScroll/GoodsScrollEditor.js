import React from 'react';
import {Dialog} from 'zent';
import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';
import EditorCard from '../../common/EditorCard';
import ImageSelector from '../../common/ImageSelector';
import {cloneDeep} from "lodash"
import "./GoodsScroll.less"

export const PLACEHOLDER = '请选择商品';
const {openDialog, closeDialog} = Dialog;
export default class GoodsScrollEditor extends DesignEditor {

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
      <div className="rc-design-component-goods-scroll-editor">
        <div className="rc-design-editor-component-title">轮播图片</div>
        <ControlGroup
          label="图片:"
          required
          showError={showError || this.getMetaProperty('content', 'touched')}
          error={validation.content}
        ></ControlGroup>
        <EditorCard
          onCardClick={this.onCardAddClick.bind(this)}>
          <p>添加图片</p>
          <p>建议宽度600px</p>
        </EditorCard>
      </div>
    );
  }

  static designType = 'goods-scroll';
  static designDescription = '拼团滚动';

  static getInitialValue(settings, globalConfig) {
    return {
      items: [],
      ctype: 27
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