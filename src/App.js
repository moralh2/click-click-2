import React, { Component } from 'react'
import Wrapper from "./components/Wrapper"
import Card from "./components/Card"
import imagesImport from "./images.json"

class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    clickables: []
  }

  componentDidMount() {
    this.setState({
      clickables: JSON.parse(JSON.stringify(imagesImport))
    })
  }

  shuffleArr = array => {
    let currentIndex = array.length, temporaryValue, randomIndex
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
  }

  compare = (a, b) => {
    if (a.id < b.id) {return -1}
    if (a.id > b.id) {return 1}
    return 0
  }

  handleClicky = id => {
    let allImages = this.state.clickables.sort(this.compare)
    let clickedImage = allImages.filter(clicky => clicky.id === id)

    // --------- if the image hasn't been clicked
    if (clickedImage[0].clicked === false) {
      // set clicked to true
      allImages[parseInt(id) - 1].clicked = true
      // increase score
      let newScore = this.state.score + 1
      // compare to top score
      let newTopScore = this.state.topScore
      if (this.state.topScore < newScore) { newTopScore++ }
      // shuffle the array
      let finalImages = this.shuffleArr(allImages)
      // update game state
      this.setState({
        score: newScore,
        topScore: newTopScore,
        clickables: finalImages
      })
    }
    // --------- if the image HAS been clicked on
    else {
      // reset score to 0, and reset array
      this.setState({
        score: 0,
        clickables:  this.shuffleArr(JSON.parse(JSON.stringify(imagesImport)))  
      })
    }
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
              handleClicky={this.handleClicky}
            />
          ))}
      </Wrapper>
    )
  }
}

export default App