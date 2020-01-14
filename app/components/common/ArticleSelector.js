import React, {PureComponent} from 'react';
import {
  Upload, Tabs, Table, Checkbox, Button, LayoutRow as Row,
  LayoutCol as Col,
  LayoutGrid as Grid,
  LayoutConfigProvider as ConfigProvider, Input,
} from "zent"
import {request, api, mediaUrlFormat} from "@/utils/utils"
import PropTypes from 'prop-types'
import "./ArticleSelector.less"

const {TabPanel} = Tabs;
const columns = [
  {
    title: '文章名称',
    name: 'name',
  }
];
export default class ArticleSelector extends PureComponent {

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
      method: "GET",
      url: `${api.listArticle}`,
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
      method: "GET",
      url: `${api.listArticle}`,
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
      url: `${api.listArticle}`,
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
        <TabPanel tab="文章库" id="1">
          <Grid>
            <Row>
              <Col span={8}>文章库</Col>
              <Col span={8} offset={8}><Input icon="search" placeholder="搜索"
                                              onPressEnter={this.handleSearch.bind(this)}/></Col>
            </Row>
            <Row className="article-table">
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
      </Tabs>
    </div>);
  }
}