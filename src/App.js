import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";


class App extends Component {

  render() {
    return (
      <Wrapper>

      <Card imageSrc={imageSrc}/>
      <Card imageSrc={imageSrc}/>
      <Card imageSrc={imageSrc}/>
      <Card imageSrc={imageSrc}/>
      <Card imageSrc={imageSrc}/>

      </Wrapper>
    );
  }
}


var imageSrc = "https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png"

export default App;