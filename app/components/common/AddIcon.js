import React, {PureComponent} from 'react';
import {Icon} from "zent"
import "./AddIcon.less"

export default class EditorCard extends PureComponent {
  componentDidMount() {
  }

  handleDeleteClick(e) {
    e.stopPropagation()
    let {onDelete} = this.props;
    onDelete && onDelete();
  }

  handleIconClick() {
    let {onClick} = this.props;
    onClick && onClick();
  }

  render() {
    let {src} = this.props;

    return (<div className="card-add-icon" onClick={this.handleIconClick.bind(this)}>
      {
        src ? (
          <div onClick={this.handleDeleteClick.bind(this)} className="delete-btn"><Icon className="close" type="close"/>
          </div>) : null
      }
      {
        src ? (<img style={{'width': '100%', 'height': '100%'}} src={src}></img>) : (
          <Icon className="icon" type="plus"/>)
      }
    </div>);
  }
}