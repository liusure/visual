import React, {PureComponent} from 'react';
import {Dialog, Icon, Input, Select, Tag} from "zent"
import "./RelationSelector.less"
import GoodsSelector from "@/components/common/GoodsSelector";
import ArticleSelector from "@/components/common/ArticleSelector";
import ColumnSelector from "@/components/common/ColumnSelector";

const {openDialog, closeDialog} = Dialog;
export default class RelationSelector extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      updatingItem: {}
    }
  }

  componentDidMount() {
    this.setState({
      updatingItem: this.props.item
    })
  }

  handleRelationTypeChange(key, e) {
    let {updatingItem} = this.state;
    let {onChange} = this.props;
    updatingItem[key] = e.target.value;
    onChange && onChange({
      item: updatingItem
    });
  }

  onColumnRelationClick() {
    openDialog({
      dialogId: "chooseRelation",
      parentComponent: this,
      children: (<div>
        <ColumnSelector isSingleSelection={true} onConfirm={this.handleRelationConfirm.bind(this)}></ColumnSelector>
      </div>),
    })
  }

  onGoodsRelationClick() {
    openDialog({
      dialogId: "chooseRelation",
      parentComponent: this,
      children: (<div>
        <GoodsSelector isSingleSelection={true} onConfirm={this.handleRelationConfirm.bind(this)}></GoodsSelector>
      </div>),
    })
  }

  onArticleRelationClick() {
    openDialog({
      dialogId: "chooseRelation",
      parentComponent: this,
      children: (<div>
        <ArticleSelector isSingleSelection={true} onConfirm={this.handleRelationConfirm.bind(this)}></ArticleSelector>
      </div>),
    })
  }

  handleRelationConfirm({selectedRowKeys, selectedRows, linkUrl}) {
    let {onChange} = this.props;
    if (linkUrl != null) {
      this.state.updatingItem.linkUrl = linkUrl
      this.state.updatingItem.targetId = null
    } else if (selectedRowKeys.length === 1) {
      this.state.updatingItem.targetId = selectedRowKeys[0]
      this.state.updatingItem.linkUrl = null
      this.state.updatingItem.item = selectedRows[0]
    }
    onChange && onChange({
      item: this.state.updatingItem
    });
    closeDialog("chooseRelation")
  }


  render() {
    let {updatingItem} = this.state;
    return (<div className="update-panel">
      <Select
        name="itemType"
        placeholder="选择类型"
        onChange={this.handleRelationTypeChange.bind(this, "itemType")}
        value={updatingItem.itemType}
      >
        <Option value="-1">无</Option>
        <Option value="0">专题</Option>
        <Option value="1">商品</Option>
        <Option value="2">文章</Option>
        {/*<Option value="3" disable>活动</Option>*/}
        <Option value="4">外链</Option>
        {/*<Option value="5" disable>任务详情</Option>
        <Option value="6" disable>一键打包</Option>
        <Option value="7" disable>文字</Option>
        <Option value="8" disable>店铺</Option>*/}
      </Select>
      {
        updatingItem.itemType == '0' ?
          updatingItem.item && updatingItem.item.id ? <div className="update-relation-wrapper">
              <Tag theme="blue" outline>{updatingItem.item.name}</Tag>
              <a href="javascript:void(0)" onClick={this.onColumnRelationClick.bind(this)}>修改</a>
            </div>
            : <a href="javascript:void(0)" onClick={this.onColumnRelationClick.bind(this)}>选择专题</a>
          : null
      }{
      updatingItem.itemType == '1' ?
        updatingItem.item && updatingItem.item.id ? <div className="update-relation-wrapper">
            <Tag theme="blue" outline>{updatingItem.item.name}</Tag>
            <a href="javascript:void(0)" onClick={this.onGoodsRelationClick.bind(this)}>修改</a>
          </div>
          : <a href="javascript:void(0)" onClick={this.onGoodsRelationClick.bind(this)}>选择商品</a>
        : null
    } {
      updatingItem.itemType == '2' ? (
        updatingItem.item && updatingItem.item.id ? <div className="update-relation-wrapper">
            <Tag theme="blue" outline>{updatingItem.item.name}</Tag>
            <a href="javascript:void(0)" onClick={this.onArticleRelationClick.bind(this)}>修改</a>
          </div>
          : <a href="javascript:void(0)" onClick={this.onArticleRelationClick.bind(this)}>选择文章</a>

      ) : null
    } {
      updatingItem.itemType == '4' ? (<Input onChange={(e) => {
        this.handleRelationConfirm.call(this, {linkUrl: e.target.value})
      }} value={updatingItem.linkUrl}/>) : null
    }
    </div>)
  }
}