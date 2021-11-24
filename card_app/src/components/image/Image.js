import React, { Component } from 'react'
import './Image.css';

class Image extends Component {
    render() {
        return (
            <div>
                <img className="image" alt = "" id="image-input" src={this.props.src} style={{ width: this.props.src !== "" ? '100%' : '0px', padding: this.props.src !== "" ? '0px' : '255px',cursor: this.props.defaultCursor, backgroundColor: this.props.backgroundColor }} />
            </div>
        )
    }
}
export default Image;