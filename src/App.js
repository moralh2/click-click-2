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
    let copy = JSON.parse(JSON.stringify(imagesImport))
    this.setState({clickables: copy})
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
    if (a.id < b.id)
      return -1
    if (a.id > b.id)
      return 1
    return 0
  }

  handleClicky = id => {
    let allImages = this.state.clickables.sort(this.compare)
    let clickedImage = allImages.filter(clicky => clicky.id === id)
    // console.log(clickedImage);

    // --------- IMAGE NOT CLICKED YET
    if (clickedImage[0].clicked === false) {
      // set clicked to true
      // console.log('made it here')
      allImages[parseInt(id) - 1].clicked = true

      console.log(imagesImport)

      // increase score
      let newScore = this.state.score + 1

      // compare to top score
      let newTopScore = this.state.topScore
      if (this.state.topScore < newScore) { newTopScore++ }

      let finalImages = this.shuffleArr(allImages)

      // console.log(clickablesImport)

      this.setState({
        score: newScore,
        topScore: newTopScore,
        clickables: finalImages
      })
    }
    else {

      let newScore = 0
      let newTopScore = this.state.topScore
      // let finalImages = clickablesImport.slice()
      // finalImages = this.shuffleArr(finalImages);
      
      

      // console.log('down here')
      // console.log(clickablesImport)
      // let copy = clickablesImport;
      // let copy = clickablesImport.slice();
      let copy = JSON.parse(JSON.stringify(imagesImport))


      this.setState({
        score: newScore,
        topScore: newTopScore,
        clickables: copy
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