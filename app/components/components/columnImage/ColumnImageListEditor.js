import React from 'react';
import {Dialog, Card, Radio, Select, Input, Button} from 'zent';

import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';
import AddIcon from '@/components/common/AddIcon';
import ImageSelector from "@/components/common/ImageSelector";
import {request, api} from "@/utils/utils";
import "./ColumnImageList.less"

export const PLACEHOLDER = '请添加图片';
const RadioGroup = Radio.Group;
const Option = Select.Option;
const {openDialog, closeDialog} = Dialog;

export default class ColumnImageListEditor extends DesignEditor {

  state = {
    goodsList: []
  }

  componentDidMount() {
    request({
      method: "GET",
      url: `${api.listGoods}`,
      params: {
        'page_no': 1,
        'page_size': 9999
      }
    }).then((res) => {
      this.setState({
        goodsList: res.items
      })
    })
  }

  handleImageSelectType(e) {
    this.setState({selectType: e.target.value});
  }

  handleItemTypeSelected(item, e) {
    item.itemType = e.target.value;
  }

  handleRelationUpdateClick(item) {
    let {value, showError, validation, onChange} = this.props;
    openDialog({
      dialogId: "relationDialog",
      parentComponent: this,
      children: <div>
        <ControlGroup
          label="关联:"
          required
          showError={showError || this.getMetaProperty('content', 'touched')}
          error={validation.content}
        >
          {item.itemType}

        </ControlGroup>

      </div>,
      footer: (<div><Button onClick={() => closeDialog('relationDialog')}>关闭</Button><Button
        onClick={this.handleSaveRelation.bind(this, item)}>保存</Button></div>),
    })
  }

  handleRelationUpdate(item, key, e) {
    item[key] = e.target.value;
    let {value, onChange} = this.props;
    onChange && onChange({
      ...value,
      items: [...this.props.value.items]
    });
  }

  handleSaveRelation() {
    let {value, onChange} = this.props;
    onChange && onChange({
      ...value,
      items: [...this.props.value.items]
    });
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

  formatUpdatePanel(item) {
    let {validation, showError} = this.props;
    return (<div className="update-panel">
      <Select
        name="itemType"
        placeholder="选择类型"
        onChange={this.handleRelationUpdate.bind(this, item, 'itemType')}
        value={item.itemType}
      >
        <Option value="0">无</Option>
        <Option value="1">商品</Option>
        <Option value="2">文章</Option>
        <Option value="3">外链</Option>
      </Select>
      {
        item.itemType == '1' ?
          <Select
            data={this.state.goodsList}
            optionValue="id"
            optionText="name"
            name="targetId"
            placeholder="选择商品"
            onChange={this.onInputChange}
            value={item.targetId}
          >
          </Select>
          : null
      } {
      item.itemType == '2' ? (
        <Select
          name="itemType"
          placeholder="选择文章"
          onChange={this.onInputChange}
          value={item.targetId}
        >
        </Select>
      ) : null
    } {
      item.itemType == '3' ? (<Input/>) : null
    }
    </div>)
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
                  <div>
                    <AddIcon inline key={index} src={item.url} onClick={this.handleImageAddClick.bind(this)}
                             onDelete={this.handleImageDelete.bind(this, index)}/>
                    {/*{this.formatUpdatePanel(item)}*/}
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

  static designType = 'column-image';
  static designDescription = '栏目头图';

  static getInitialValue(settings, globalConfig) {
    return {
      selectType: 'select',
      columnCount: "2",
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