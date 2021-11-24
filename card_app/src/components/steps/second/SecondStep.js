import React, { Component } from 'react';
import MainTitle from '../../mainTitle/MainTitle'
import Title from '../../title/Title';
import Image from '../../image/Image';
import Textarea from '../../textarea/Textarea';
import './SecondStep.css';
import axios from 'axios';

class SecondStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: "",
      newDescription: "",
      newImageSrc: "",
      firbaseObjectId : ""
    }
  }

  getDataHandler = () => {
    const baseUrl = "https://card-app-52af5-default-rtdb.firebaseio.com/"
    const url = baseUrl + "records.json"
    axios.get(url)
      .then(response => {
        const data = response.data[this.state.firbaseObjectId];
        this.setState({
          newTitle: data.title,
          newDescription: data.description,
          newImageSrc: data.imageSrc
        });
      }).catch(error => {
        console.log("error("+this.state.firbaseObjectId+") => \n"+error)
      });
  }

  componentDidUpdate(props){
    const objectId =  this.props.firbaseObjectId;
    if( objectId !== "" && objectId !== this.state.firbaseObjectId){
      this.setState({
        firbaseObjectId: objectId
      }, () => this.getDataHandler());
    }
  }

  render() {
    return (
      <div className="content">
        <MainTitle />
        <div className="frameTwo">
          <Title value={this.state.newTitle} defaultCursor={'not-allowed'} />
          <Textarea value={this.state.newDescription} defaultCursor={'not-allowed'} isDisable={false} />
          <Image src={this.state.newImageSrc} defaultCursor='not-allowed' backgroundColor='grey' />
        </div>
      </div>
    )
  }
}

export default SecondStep;