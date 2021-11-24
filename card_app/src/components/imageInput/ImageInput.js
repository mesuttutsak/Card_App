import React, { Component } from 'react'
import Image from '../image/Image';
import './ImageInput.css';

class ImageInput extends Component {
    render() {
        return (
            <div>
                <input type="file" accept="image/*" capture="camera" className="image-input" id="image-input" onChange={this.props.onChangeImage} />
                <label htmlFor="image-input" >
                    <Image src={this.props.src}/>
                </label>
            </div>
        )
    }
}
export default ImageInput;