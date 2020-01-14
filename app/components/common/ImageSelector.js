import React, {PureComponent} from 'react';
import {Upload, Tabs, Input, Button, Icon} from "zent"
import PropTypes from 'prop-types'
import "./ImageSelector.less"
import {request, api,mediaUrlFormat} from '@/utils/utils'
import {cloneDeep} from 'lodash'

const {TabPanel} = Tabs;

const categoryList = [
  {id: 205772, name: 'test1'},
  {id: 205773, name: 'test2'},
  {id: 205774, name: 'test3'}
];

export default class ImageSelector extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      areaId: null,
      uploadData: [],
      items: [],
      tabId: '1'
    };
  }

  static propTypes = {
    areaId: PropTypes.number.isRequired
  }

  componentDidMount() {
    let {items} = this.props;
    if (items.length > 0) {
      this.setState({
        items
      })
    }
  }

  onTabChange = id => {
    this.setState({
      tabId: id,
    });
  };

  fetchNetworkImage(data) {
    return new Promise(resolve => {
      this.setState({
        uploadData: [{
          file: null,
          src: data
        }]
      });
      resolve(data);
    });
  }

  updateLocalImage(data) {
    let {areaId} = this.props;
    this.setState({
      uploadData: data
    }, (state) => {
      request({
        method: "POST",
        url: `${api.uploadFile}`,
        data: data
      }).then((res) => {
        this.setState({
          items: this.state.items.concat(res.items.map(img => ({areaId, url: img.url})))
        }, (state) => {
          console.log(this.state.items)
        })
      })
    });
  }

  onAddItemClick() {
    console.log("onAddItemClick");
    this.setState({
      items: [...this.state.items, {url: ''}]
    })
  }

  handleConfirm() {
    let {onClose, onConfirm} = this.props;
    onConfirm && onConfirm({
      items: this.state.items
    });
  }

  onItemChange(index, e) {
    let items = cloneDeep(this.state.items)
    items[index].url = e.target.value;
    this.setState({
      items
    })
  }

  onRemoveItemClick(index) {
    let items = cloneDeep(this.state.items)
    this.setState({
      items: items.filter((item, i) => i != index)
    })
  }

  render() {
    let {items} = this.state;
    return (<div className="image-selector">
      <div>
        {this.state.items.map((item, index) => (
          <img className='zent-upload-demo-pic' width="80" height="80" key={index} src={item.url}
               style={{marginRight: '10px'}}/>
        ))}
        <Upload
          className='zent-upload-demo-pic'
          maxSize={3 * 1024 * 1024}
          maxAmount={10}
          triggerInline
          categoryList={categoryList}
          onFetch={this.fetchNetworkImage.bind(this)}
          onUpload={this.updateLocalImage.bind(this)}
          errorMessages={{
            overMaxSize: (data) => `Over size: ${data.maxSize}`, // function
            overMaxAmount: 'So many', // string
            wrongMimeType: false || null || '' || (() => false) // show nothing
          }}
        />
      </div>
      <div>
        <Button onClick={this.handleConfirm.bind(this)}>确定</Button>
      </div>
    </div>);
  }
}