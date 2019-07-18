import React from 'react';
import Factoid from './Factoid.js'

class TriviaBox extends React.Component{
  render(){
    console.log(this.props.trivia)

    const trivia = this.props.trivia.map((triviaData, index) => {
      return (
        < Factoid
        key={index}
        triviaText={triviaData.text}
        answer={triviaData.answer}
        />
      );
    })

    return (
      <div className="trivia-box">
      {trivia}
      </div>

    )
  }
}

export default TriviaBox;
