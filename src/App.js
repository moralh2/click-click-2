import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";

class App extends Component {

  render() {
    return (
      <Wrapper>
        <div class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
      </Wrapper>
    );
  }
}

export default App;
