import React from 'react';

class Game extends React.Component {
  constructor() {
  super()
  this.state = {
      score: 0
    }
  }
  render(){
    return (
      <div>
        <button type="button" name="button">New Game</button>
        <span>Score <span id="score">{this.state.score}</span></span>
      </div>
    )
  }
}
export default Game;
