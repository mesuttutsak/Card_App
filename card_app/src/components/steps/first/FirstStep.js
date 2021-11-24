import React, { Component } from 'react';
import MainTitle from '../../mainTitle/MainTitle';
import Title from '../../title/Title';
import Button from '../../button/Button';
import ImageInput from '../../imageInput/ImageInput';
import Textarea from '../../textarea/Textarea';
import './FirstStep.css';
import axios from 'axios';

class FirstStep extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "New Title",
            description: "",
            imageSrc: "",

            isEnableButton: false,
            isOkTitle: false,
            isOkDescription: false,
            isOkImage: false
        }
    }

    clickTitle = () => {
        if (this.state.title !== "Hello World") {
            this.setState({
                title: "Hello World",
                isOkTitle: true
            }, () => this.checkSaveButton());
        }

    }

    handleChangeDescription = (event) => {
        this.setState({
            description: event.target.value,
            isOkDescription: (event.target.value !== '')
        }, () => this.checkSaveButton());
    }

    handleFileChange = (event) => {
        const { target } = event;
        const { files } = target;


        if (files && files[0]) {
            var reader = new FileReader();
            reader.onload = event => {
                this.setState({
                    imageSrc: event.target.result,
                    isOkImage: true
                }, () => this.checkSaveButton());
            };

            reader.readAsDataURL(files[0]);
        }
    }

    checkSaveButton() {
        this.setState({
            isEnableButton: this.state.isOkTitle && this.state.isOkDescription && this.state.isOkImage
        })
    }

    clickSaveButton = () => {
        const baseUrl = "https://card-app-52af5-default-rtdb.firebaseio.com/"
        const url = baseUrl + "records.json"
        const data = {
            title: this.state.title,
            description: this.state.description,
            imageSrc: this.state.imageSrc,
        };
        
        axios.post(url, data).then(response => {
            this.props.onClickSave(response.data["name"]);
            this.setState({
                title: "New Title",
                isOkTitle: false,
                description: "",
                isOkDescription: false,
                imageSrc: "",
                isOkImage: false
            }, () => this.checkSaveButton());

        }).catch(error => {
           alert(error)
        });
    }

    render() {
        return (
            <div className="content" >
                <MainTitle />
                <div className="frameOne" >
                    <label htmlFor="description">
                        <Title value={this.state.title} onClick={this.clickTitle} defaultCursor={'pointer'} />
                    </label>
                    <Textarea placeholder="New description" value={this.state.description} onChangeDescription={this.handleChangeDescription} />
                    <ImageInput src={this.state.imageSrc} onChangeImage={this.handleFileChange} />
                    <Button isEnable={this.state.isEnableButton} onClickSaveButton={this.clickSaveButton} />
                </div>
            </div>
        )
    }
}

export default FirstStep;