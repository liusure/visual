import React from 'react';
import {Card, Dialog, Radio, Select} from 'zent';
import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';
import EditorCard from '../../common/EditorCard';
import GoodsSelector from "@/components/common/GoodsSelector";
import "./GoodsScroll.less"
import AddIcon from '@/components/common/AddIcon';
import {mediaUrlFormat} from "@/utils/utils";
import {itemType} from "@/constants";

export const PLACEHOLDER = '请选择拼团商品';
const RadioGroup = Radio.Group;
const {openDialog, closeDialog} = Dialog;

const default_img = "https://tenfen-video.oss-cn-beijing.aliyuncs.com/visual_default_background.webp";
export default class GoodsScrollEditor extends DesignEditor {

  onGoodsAddClick() {
    openDialog({
      dialogId: "chooseGoods",
      parentComponent: this,
      children: (<div>
        <GoodsSelector onConfirm={this.handleGoodsConfirm.bind(this)}></GoodsSelector>
      </div>),
    })
  }


  onSelectType(e) {
    let {value, value: {}, onChange} = this.props;
    onChange && onChange({
      ...value,
      contentType: e.target.value
    });
  }

  handleGoodsConfirm({selectedRowKeys, selectedRows}) {
    let {value, value: {id, items}, onChange} = this.props;
    let itemsArr = [...items, ...selectedRows.map(item => ({
      targetId: item.id,
      itemType: itemType.ITEM_TYPE_GOODS,
      areaId: id,
      imageUrls: item.imageUrls,
      name: item.name,
      groupPrice: item.groupPrice
    }))];
    onChange && onChange({
      ...value,
      items: itemsArr
    });
    closeDialog('chooseGoods');
  }

  handleGoodsDelete(index) {
    const {value, value: {rowColCount, items}, showError, validation, onChange} = this.props;
    items.splice(index, 1);
    onChange && onChange({
      ...value,
      items
    });
    console.log(items);
  }

  render() {
    const {value, value: {items}, showError, validation} = this.props;

    return (
      <div className="rc-design-component-goods-scroll-editor">
        <div className="rc-design-editor-component-title">商品列表</div>
        <ControlGroup
          label="来源:"
          required
          showError={showError || this.getMetaProperty('content', 'touched')}
          error={validation.content}
        >
          <RadioGroup onChange={this.onSelectType.bind(this)} value={value.contentType + ""}>
            <Radio value="0">自选</Radio>
            <Radio value="1" disabled>继承容器</Radio>
            {/*<Radio value="2">专题</Radio>*/}
          </RadioGroup>
        </ControlGroup>
        {
          items.map((item, index) => <AddIcon onDelete={this.handleGoodsDelete.bind(this, index)}
                                              src={item.imageUrls && mediaUrlFormat(item.imageUrls[0]) || default_img}
                                              onClick={this.onGoodsAddClick.bind(this)}/>)
        }
        <AddIcon onClick={this.onGoodsAddClick.bind(this)}/>
      </div>
    );
  }

  static designType = 'goods-scroll';
  static designDescription = '拼团滚动';

  static getInitialValue(settings, globalConfig) {
    return {
      items: [],
      ctype: 28,
      contentType: "0"//列表内容是自选（0）还是继承容器（1）
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