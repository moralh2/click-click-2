import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import imagesImport from "./images.json";

let imageColl = JSON.parse(JSON.stringify(imagesImport))

class App extends Component {

  render() {
    return (
      <Wrapper>

      {imageColl.map(clicky => (
          <Card
            id={clicky.id}
            key={clicky.id}
            name={clicky.name}
            image={clicky.image}
            clicked={clicky.clicked}
          />
        ))}

      </Wrapper>
    );
  }
}


var imageSrc = "https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png"

export default App;