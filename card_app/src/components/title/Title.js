import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  render() {
    return (
      <div>
        <h2 onClick={this.props.onClick} className="title" style={{ cursor: this.props.defaultCursor }}>{this.props.value}</h2>
      </div>
    )
  }
}

export default Title;