import React, {PureComponent} from 'react';
import {
  Tabs,
  Table,
  Input,
  Button,
  LayoutRow as Row,
  LayoutCol as Col,
  LayoutGrid as Grid,
  LayoutConfigProvider as ConfigProvider,
} from "zent"
import {request, api, mediaUrlFormat} from "@/utils/utils"
import PropTypes from 'prop-types'
import "./ColumnSelector.less"

const {TabPanel} = Tabs;
const columns = [
  {
    title: '专题名称',
    name: 'name',
  }
];
export default class ColumnSelector extends PureComponent {

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
        pageSizeOptions: [20, 30, 50],
      }
    };
  }

  componentDidMount() {
    request({
      method: "POST",
      url: `${api.listColumn}`,
      params: {}
    }).then((res) => {
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
    request({
      method: "POST",
      url: `${api.listColumn}`,
      params: {
        'page_no': value.current,
        'page_size': value.pageSize
      }
    }).then((res) => {
      this.setState({
        page: {...this.state.page, ...res.item}
      })
    })
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

  handleSearch(e) {
    let keyWord = e.target.value;
    request({
      method: "POST",
      url: `${api.listColumn}`,
      params: {
        'page_no': 1,
        'page_size': this.state.page.pageSize
      },
      data: {
        "LIKE_name": keyWord
      }
    }).then((res) => {
      this.setState({
        page: {...this.state.page, ...res.item}
      })
    })
  }

  render() {
    let self = this;

    return (<div>
      <Tabs activeId={this.state.tabId}
            onChange={this.onTabChange}
            align="right"
            type="card">
        <TabPanel tab="专题库" id="1">
          <Grid>
            <Row>
              <Col span={8}>专题库</Col>
              <Col span={8} offset={8}><Input icon="search" placeholder="搜索"
                                              onPressEnter={this.handleSearch.bind(this)}/></Col>
            </Row>
            <Row className="column-table">
              <Col span={24}>
                <Table
                  columns={columns}
                  datasets={this.state.page.content}
                  rowKey="id"
                  onChange={this.onTableChange.bind(this)}
                  pageInfo={this.state.page}
                  selection={{
                    selectedRowKeys: this.state.selectedRowKeys,
                    needCrossPage: true,
                    isSingleSelection: this.props.isSingleSelection,
                    onSelect: (selectedRowKeys, selectedRows, currentRow) => {
                      self.onSelect(selectedRowKeys, selectedRows, currentRow);
                    },
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col span={8} offset={8}><Button type="primary" onClick={this.handleConfirm.bind(this)}>确定</Button></Col>
            </Row>
          </Grid>
        </TabPanel>
        <TabPanel tab="专题" id="2">
        </TabPanel>
      </Tabs>
    </div>);
  }
}