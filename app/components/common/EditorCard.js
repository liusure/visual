import React, {PureComponent} from 'react';
import {Card} from "zent"
import PropTypes from 'prop-types'
import "./EditorCard.less"

export default class EditorCard extends PureComponent {
  componentDidMount() {
  }

  handleCardClick() {
    let {onCardClick} = this.props;
    onCardClick && onCardClick();
  }

  render() {

    let {children} = this.props;

    return (<div onClick={this.handleCardClick.bind(this)}>
      <Card className="editor-card">
        {children}
      </Card>
    </div>);
  }
}