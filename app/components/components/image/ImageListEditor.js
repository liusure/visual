import React from 'react';
import {Dialog, Card, Radio, Select, Input, Button, Tag} from 'zent';

import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';
import AddIcon from '@/components/common/AddIcon';
import ImageSelector from "@/components/common/ImageSelector";
import {request, api, mediaUrlFormat} from "@/utils/utils";
import "./ImageList.less"
import {contentType} from "@/constants";
import RelationSelector from "@/components/common/RelationSelector";

export const PLACEHOLDER = '请添加图片';
const RadioGroup = Radio.Group;
const Option = Select.Option;
const {openDialog, closeDialog} = Dialog;

export default class ImageListEditor extends DesignEditor {

  constructor(props) {
    super(props)
    this.state = {
      ...this.state,
      updatingItemIndex: null
    }
  }

  componentDidMount() {
  }

  handleImageSelectType(e) {
    this.setState({selectType: e.target.value});
  }

  handleImageAddClick() {
    let {value: {id, items}} = this.props;
    openDialog({
      dialogId: "chooseImages",
      parentComponent: this,
      showRelationUpdateDialog: false,
      children: (<div>
        <ImageSelector areaId={id} onConfirm={this.onImagesConfirm.bind(this)} items={[...items]}></ImageSelector>
      </div>),
    })
  }

  onImagesConfirm({items}) {
    let {value, onChange} = this.props;
    onChange && onChange({
      ...value,
      items: items.map(item => ({
        ...item
      }))
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

  handleRelationChange(item) {
    const {value, value: {items}, onChange} = this.props;
    let updatingItems = [...items]
    updatingItems.map(updatingItem => {
      if (updatingItem.id === item.id) {
        return item;
      } else {
        return updatingItem;
      }
    })
    onChange && onChange({
      ...value,
      items: updatingItems
    });
  }

  render() {
    const {
      value: {
        selectType,
        rowColCount,
        items
      },
      showError,
      validation
    } = this.props;
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
              <Card className="add-image-card-container">{
                items ? (items.map((item, index) => <div className="add-goods-wrapper" key={index}>
                  <div className="add-image-card">
                    <AddIcon inline src={item.url} onClick={this.handleImageAddClick.bind(this)}
                             onDelete={this.handleImageDelete.bind(this, index)}/>
                    <RelationSelector item={item} onChange={this.handleRelationChange.bind(this)}/>
                  </div>
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
            name="rowColCount"
            placeholder="选择列数"
            onChange={this.onInputChange}
            value={rowColCount}
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
      rowColCount: "2",
      items: [],
      contentType: contentType.CUSTOM,
      ctype: 6
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