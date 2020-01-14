import React from 'react';
import {Dialog, Card, Radio, Select, Table} from 'zent';
import {request, api, mediaUrlFormat} from '@/utils/utils';
import {itemType} from '@/constants';
import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';
import AddIcon from '@/components/common/AddIcon';

import "./GoodsList.less"
import GoodsSelector from "@/components/common/GoodsSelector";

export const PLACEHOLDER = '请添加商品';
const RadioGroup = Radio.Group;
const Option = Select.Option;
const {openDialog, closeDialog} = Dialog;

const default_img = "https://tenfen-video.oss-cn-beijing.aliyuncs.com/visual_default_background.webp";
export default class GoodsListEditor extends DesignEditor {

  constructor(props) {
    super(props);
    this.state = {
      ...this.state
    }
  }

  componentDidMount() {
  }

  onSelectType(e) {
    let {value, value: {}, onChange} = this.props;
    onChange && onChange({
      ...value,
      contentType: e.target.value
    });
  }

  onGoodsAddClick() {
    openDialog({
      dialogId: "chooseGoods",
      parentComponent: this,
      children: (<div>
        <GoodsSelector onConfirm={this.handleGoodsConfirm.bind(this)}></GoodsSelector>
      </div>),
    })
  }

  handleGoodsConfirm({selectedRowKeys, selectedRows}) {
    let {value, value: {id, items}, onChange} = this.props;
    let itemsArr = [...items, ...selectedRows.map(item => ({
      targetId: item.id,
      itemType: itemType.ITEM_TYPE_GOODS,
      areaId: id,
      imageUrls: item.imageUrls,
      name: item.name,
      price: item.price
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
  }

  render() {
    const {
      value, value: {rowColCount, items, contentType}, showError, validation
    } = this.props;
    return (
      <div className="rc-design-component-goods-list-editor">
        <div className="rc-design-editor-component-title">商品列表</div>
        <ControlGroup
          label="来源:"
          required
          showError={showError || this.getMetaProperty('content', 'touched')}
          error={validation.content}
        >
          <RadioGroup onChange={this.onSelectType.bind(this)} value={value.contentType + ""}>
            <Radio value="0">自选</Radio>
            <Radio value="1">继承容器</Radio>
            {/*<Radio value="2">专题</Radio>*/}
          </RadioGroup>
        </ControlGroup>
        {
          contentType == '0' ? (<Card className="add-goods-card">
              {
                items.map((item, index) => <AddIcon onDelete={this.handleGoodsDelete.bind(this, index)}
                                                    src={item.imageUrls && mediaUrlFormat(item.imageUrls[0]) || default_img}
                                                    onClick={this.onGoodsAddClick.bind(this)}/>)
              }
              <AddIcon onClick={this.onGoodsAddClick.bind(this)}/>
            </Card>)
            : null
        }
        {
          contentType == '1' ? (<Card className="add-goods-card">
              继承容器
            </Card>)
            : null
        }
        <ControlGroup
          label="个数:"
          required
          showError={showError || this.getMetaProperty('content', 'touched')}
          error={validation.content}
        >
          <Select
            name="rowColCount"
            placeholder="选择列数"
            onChange={this.onInputChange}
            value={rowColCount}
          >
            <Option value="1">1</Option>
            <Option value="2">2</Option>
          </Select>
        </ControlGroup>
      </div>
    );
  }

  static designType = 'goods-list';
  static designDescription = '商品列表';

  static getInitialValue(settings, globalConfig) {
    return {
      ctype: 7,
      items: [],
      rowColCount: "2",
      contentType: "0"//列表内容是自选（0）还是继承容器（1）
    };
  }

  static validate(value) {
    return new Promise(resolve => {
      const errors = {};
      resolve(errors);
    });
  }
}