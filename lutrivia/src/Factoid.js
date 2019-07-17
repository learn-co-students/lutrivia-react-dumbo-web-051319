import React from 'react';

class Factoid extends React.Component{
  render(){

    // const trivia = this.props.trivia.map(quest => quest.text)
    console.log(this)
    return (
      <div className="factoid">
      <p>{this.props.triviaText}</p>
      <button>True</button>
      <button>False</button>
      <p>{this.props.answer.toString()}</p>
      </div>

    )
  }
}

export default Factoid;
