import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import imagesImport from "./images.json";

class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    clickables: []
  };

  componentDidMount() {
    let copy = JSON.parse(JSON.stringify(imagesImport))
    this.setState({clickables: copy});
  }


  render() {
    return (

      <Wrapper>
        {this.state.clickables.map(clicky => (
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

export default App;