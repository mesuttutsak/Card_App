import React, { Component } from 'react'
import './Button.css';

class Button extends Component {
    render() {
        return (
            <div>
                <button className="saveButton" disabled={!this.props.isEnable} style={{ cursor: this.props.isEnable ? 'pointer' : 'not-allowed', backgroundColor: (this.props.isEnable ? "green" : "grey") }} onClick={this.props.onClickSaveButton} />
            </div>
        )
    }
}
export default Button;