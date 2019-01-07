import React, { Component } from "react";
import pins from "./pins.json";
import Wrapper from "./components/Wrapper";
import Pins from "./components/pins";
import { Jumbotron, Button } from "reactstrap";
import "./App.css";

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    message: "Click an image to begin.",
    pins: pins,
    unselectedPins: pins
  };

  //Shuffle Array function
  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  //Function to reset State to initial state on click
  handleButtonClick = (event) => {
    event.preventDefault();
    this.setState({
      currentScore: 0,
      topScore: 0,
      message: "Click an image to begin.",
      allPins: pins,
      unselectedPins: pins
    });
  };

  //selectPin is called by onClick event in pins.js
  //and receives pins parameter
  selectPin = (selectPinName) => {
    //Using array.find function to find the first element in unselectedPins array that sattisfies the condition
    //if no pins matched then findPin will equals to undefined
    const findPin = this.state.unselectedPins.find(
      (pins) => pins.pinName === selectPinName
    );

    //If no pins found in the unselectedPins array
    //Then setState for State properties: topScore will be replaced with currentScore if currentScore is higher than topScore
    //and start new game
    if (findPin === undefined) {
      this.setState({
        message: "You guessed incorrectly!",
        topScore:
          this.state.currentScore > this.state.topScore
            ? this.state.currentScore
            : this.state.topScore,
        currentScore: 0,
        allPins: pins,
        unselectedPins: pins
      });
    }
    //If pins is found in the unselectedPins array
    //Then use array.filter to create a new array (newUnselectedPins)
    else {
      const newUnselectedPins = this.state.unselectedPins.filter(
        (pins) => pins.pinName !== selectPinName
      );

      this.setState({
        message: "You guessed correctly!",
        currentScore: this.state.currentScore + 1,
        allPins: pins,
        unselectedPins: newUnselectedPins
      });
    } //End else

    //Invoke shuffleArray to shuffle images array
    this.shuffleArray(pins);
  }; //End if

  render() {
    return (
      <div>
        <div className="App">
          <Jumbotron>
            <h2 className="App-title">Black Political Challenge Pins</h2>
            <p className="message">{this.state.message}</p>
            <p className="message">Current Score: {this.state.currentScore}</p>
            <p className="message">Top Score: {this.state.topScore}</p>
            <Button color="danger" onClick={this.handleButtonClick}>
              Start Over{" "}
            </Button>
          </Jumbotron>
        </div>
        <Wrapper>
          {//map function iterates thru pins array and displays individual image
          //and pass to pins with key, pins, charImage, currentScore and function selectPin
          this.state.pins.map((pins) => (
            <Pins
              key={pins.id}
              pinName={pins.pinName}
              image={pins.image}
              currentScore={this.state.currentScore}
              selectPin={this.selectPin}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
