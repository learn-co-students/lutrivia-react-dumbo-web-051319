import React from 'react';

class Factoid extends React.Component{

trueClick = () => {
  if (this.props.answer === true){
    console.log("it true")
  }

}

falseClick = () => {
  if (this.props.answer === false){
    console.log("it false")
  }

}

  render(){

    // const trivia = this.props.trivia.map(quest => quest.text)
    console.log(this)
    return (
      <div className="factoid">
      <p>{this.props.triviaText}</p>
      <button className="true" onClick={this.trueClick} >True</button>
      <button className="false" onClick={this.falseClick} >False</button>
      <p>{this.props.answer.toString()}</p>
      </div>

    )
  }
}



export default Factoid;
