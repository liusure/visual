import React from 'react';
import {Dialog, Card, Radio, Select, Input, Button} from 'zent';

import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';
import AddIcon from '@/components/common/AddIcon';

import ImageSelector from "@/components/common/ImageSelector";
import "./ImageList.less"

export const PLACEHOLDER = '请添加图片';
const RadioGroup = Radio.Group;
const Option = Select.Option;
const {openDialog, closeDialog} = Dialog;

export default class ImageListEditor extends DesignEditor {

  handleImageSelectType(e) {
    this.setState({selectType: e.target.value});
  }

  onRelationChange(index) {
    openDialog({
      children: () => (<div>
        <ControlGroup
          label="关联:"
          required
          showError={showError || this.getMetaProperty('content', 'touched')}
          error={validation.content}
        >
          <Select
            name="itemType"
            placeholder="选择类型"
            onChange={this.onInputChange}
            value={itemType}
          >
            <Option value="0">无</Option>
            <Option value="1">商品</Option>
            <Option value="2">文章</Option>
            <Option value="3">外链</Option>
          </Select>
        </ControlGroup>
        {
          itemType === '1' ? <ControlGroup
            label="商品:"
            required
            showError={showError || this.getMetaProperty('content', 'touched')}
            error={validation.content}
          >
            <Select
              name="targetId"
              placeholder="选择商品"
              onChange={this.onInputChange}
              value={targetId}
            >
              <Option value="0">无</Option>
              <Option value="1">商品</Option>
              <Option value="2">文章</Option>
              <Option value="3">外链</Option>
            </Select>
          </ControlGroup> : null
        } {
        itemType === '2' ? (<ControlGroup
          label="文章:"
          required
          showError={showError || this.getMetaProperty('content', 'touched')}
          error={validation.content}
        >
          <Select
            name="itemType"
            placeholder="选择文章"
            onChange={this.onInputChange}
            value={itemType}
          >
            <Option value="0">无</Option>
            <Option value="1">商品</Option>
            <Option value="2">文章</Option>
            <Option value="3">外链</Option>
          </Select>
        </ControlGroup>) : null
      } {
        itemType === '3' ? (<ControlGroup
          label="链接:"
          required
          onChange={this.onInputChange}
          showError={showError || this.getMetaProperty('content', 'touched')}
          error={validation.content}
        ><Input/></ControlGroup>) : null
      }
      </div>)
    })
  }

  handleSaveRelation() {

  }

  handleImageAddClick() {
    let {value: {items}} = this.props;
    openDialog({
      dialogId: "chooseImages",
      parentComponent: this,
      showRelationUpdateDialog: false,
      children: (<div>
        <ImageSelector onConfirm={this.onImagesConfirm.bind(this)} items={[...items]}></ImageSelector>
      </div>),
    })
  }

  onImagesConfirm({items}) {
    let {value, onChange} = this.props;
    onChange && onChange({
      ...value,
      items
    });
    closeDialog('chooseImages');
  }

  handleImageDelete(index) {
    const {value, value: {items}, onChange} = this.props;
    items.splice(index, 1);
    onChange && onChange({
      ...value,
      items
    });
  }

  render() {
    const {
      value: {
        selectType,
        columnCount,
        items
      },
      showError,
      validation
    } = this.props;
    let {showRelationUpdateDialog} = this.state;
    return (
      <div className="rc-design-component-image-list-editor">
        <div className="rc-design-editor-component-title">图片列表</div>
        <ControlGroup
          label="来源:"
          required
          showError={showError || this.getMetaProperty('content', 'touched')}
          error={validation.content}
        >
          <RadioGroup name="selectType" onChange={this.handleImageSelectType.bind(this)} value={selectType}>
            <Radio value="select">自选</Radio>
            <Radio value="column" disabled>图库</Radio>
          </RadioGroup>
        </ControlGroup>
        {
          selectType == 'select' ? (
              <Card className="add-image-card">{
                items ? (items.map((item, index) => <div className="add-goods-wrapper">
                  <AddIcon key={index} src={item.url} onClick={this.handleImageAddClick.bind(this)}
                           onDelete={this.handleImageDelete.bind(this, index)}/>
                  <a href="javascript:void(0)" onClick={this.onRelationChange.bind(this, index)}>修改</a>
                </div>)) : null
              }
                {
                  <div className="add-goods-wrapper">
                    <AddIcon key="-1" onClick={this.handleImageAddClick.bind(this)}/>
                  </div>
                }
              </Card>
            )
            :
            (<ControlGroup
              label="分类:"
              required
              showError={showError || this.getMetaProperty('content', 'touched')}
              error={validation.content}
            > </ControlGroup>)
        }
        <ControlGroup
          label="个数:"
          required
          showError={showError || this.getMetaProperty('content', 'touched')}
          error={validation.content}
        >
          <Select
            name="columnCount"
            placeholder="选择列数"
            onChange={this.onInputChange}
            value={columnCount}
          >
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
          </Select>
        </ControlGroup>
      </div>
    );
  }

  static designType = 'image-list';
  static designDescription = '图片列表';

  static getInitialValue(settings, globalConfig) {
    return {
      selectType: 'select',
      columnCount: "2",
      itemType: "0",
      targetId: null,
      items: []
    };
  }

  static validate(value) {
    return new Promise(resolve => {
      const errors = {};
      const {content} = value;
      if (!content || !content.trim()) {
        errors.content = '请填写公告内容';
      }

      resolve(errors);
    });
  }
}