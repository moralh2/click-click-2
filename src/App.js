import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";

class App extends Component {

  render() {
    return (
      <Wrapper>

        <div className="card col-sm-4">
          <img src={imageSrc} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <p className="card-text">Dexterino</p>
          </div>
        </div>

        <div className="card col-sm-4">
          <img src={imageSrc} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <p className="card-text">Dexterino</p>
          </div>
        </div>

        <div className="card col-sm-4">
          <img src={imageSrc} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <p className="card-text">Dexterino</p>
          </div>
        </div>

        <div className="card col-sm-4">
          <img src={imageSrc} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <p className="card-text">Dexterino</p>
          </div>
        </div>

      </Wrapper>
    );
  }
}


var imageSrc = "https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png"

export default App;