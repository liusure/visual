import React from 'react';
import {Card, Dialog, Input, Select} from 'zent';
import {DesignEditor, ControlGroup} from '@zent/design/es/editor/DesignEditor';
import EditorCard from '../../common/EditorCard';
import ImageSelector from '../../common/ImageSelector';
import {contentType} from "@/constants";
import "./Swiper.less"
import AddIcon from '@/components/common/AddIcon';
import {api, request} from "@/utils/utils";
import RelationSelector from "@/components/common/RelationSelector";

export const PLACEHOLDER = '请选择图片';
const {openDialog, closeDialog} = Dialog;
export default class SwiperEditor extends DesignEditor {

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

  componentDidMount() {
    request({
      method: "POST",
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
    const {value, value: {items}, showError, validation} = this.props;

    return (
      <div className="rc-design-component-swiper-editor">
        <div className="rc-design-editor-component-title">轮播图片</div>
        <Card className="add-image-card-container">{
          items ? (items.map((item, index) => <div className="add-goods-wrapper">
            <div className="add-image-card">
              <AddIcon inline key={index} src={item.url} onDelete={this.handleImageDelete.bind(this, index)}/>
              <RelationSelector item={item} onChange={this.handleRelationChange.bind(this)}/>
            </div>
          </div>)) : null
        }
          {
            <div className="add-goods-wrapper">
              <AddIcon key="-1" onClick={this.onCardAddClick.bind(this)}/>
            </div>
          }
        </Card>
      </div>
    );
  }

  static designType = 'swiper';
  static designDescription = '图片轮播';

  static getInitialValue(settings, globalConfig) {
    return {
      items: [],
      ctype:0,
      contentType:contentType.CUSTOM
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