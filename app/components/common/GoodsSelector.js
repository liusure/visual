import React, {PureComponent} from 'react';
import {Upload, Tabs, Table, Checkbox, Button} from "zent"
import {request, api} from "@/utils/utils"
import PropTypes from 'prop-types'
import "./GoodsSelector.less"

const {TabPanel} = Tabs;
const columns = [
  {
    title: '商品名称',
    name: 'name',
  }
];
export default class GoodsSelector extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      tabId: '1',
      selectedRowKeys: [],
      selectedRows: [],
      page: {
        content: [],
        current: 1,
        total: 1,
        pageSize: 20,
        pageSizeOptions: [20, 30],
      }
    };
  }

  componentDidMount() {
    request({
      method: "GET",
      url: `${api.listGoods}`,
      params: {}
    }).then((res) => {
      console.log(res)
      this.setState({
        page: {...this.state.page, ...res.item}
      })
    })
  }

  onTabChange = id => {
    this.setState({
      tabId: id,
    });
  };

  onTableChange(value) {
    console.log(value)
  }

  onSelect(selectedRowKeys, selectedRows, currentRow) {
    this.setState({
      selectedRowKeys,
      selectedRows
    });
  }

  handleConfirm() {
    let {onConfirm} = this.props;
    let {
      selectedRowKeys,
      selectedRows
    } = this.state;
    onConfirm && onConfirm({
      selectedRowKeys,
      selectedRows
    })
  }

  render() {
    let self = this;

    return (<div>
      <Tabs activeId={this.state.tabId}
            onChange={this.onTabChange}
            align="right"
            type="card">
        <TabPanel tab="商品库" id="1">
          <div>商品库</div>
          <div class="goods-table">
            <Table
              columns={columns}
              datasets={this.state.page.content}
              rowKey="id"
              onChange={this.onTableChange.bind(this)}
              pageInfo={this.state.page}
              selection={{
                selectedRowKeys: this.state.selectedRowKeys,
                needCrossPage: true,
                onSelect: (selectedRowKeys, selectedRows, currentRow) => {
                  self.onSelect(selectedRowKeys, selectedRows, currentRow);
                },
              }}
            />
          </div>
          <div><Button type="primary" onClick={this.handleConfirm.bind(this)}>确定</Button></div>
        </TabPanel>
        <TabPanel tab="专题" id="2">
        </TabPanel>
      </Tabs>
    </div>);
  }
}