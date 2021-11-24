import React, { Component } from 'react';
import './Textarea.css';

class Textarea extends Component {
  render() {
    return (
        <div>
           <textarea id="description" disabled={this.props.isDisable} placeholder= {this.props.placeholder} value={this.props.value} onChange={this.props.onChangeDescription} style={{ cursor: this.props.defaultCursor }}/>
        </div>
    )
  }
}

export default Textarea;