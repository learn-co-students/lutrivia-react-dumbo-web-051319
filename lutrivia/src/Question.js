import React from 'react';

class Question extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
      text: props.text,
      answer: props.answer
    }
  }
  checkAnswer = (event) => {
    if (event.target.value === this.state.answer.toString()) {
      console.log("Correct");
      event.target.style.backgroundColor = "green"
      this.props.onQuestion()
    } else {
      console.log("not Correct");
      event.target.style.backgroundColor = "red"
    }
  }
  render(){
    return (
      <div>
        <p>{this.props.text}</p>
        <button onClick={this.checkAnswer} type="button" name="button" value="true" style={{backgroundColor: "white"}}>True</button>
        <button onClick={this.checkAnswer} type="button" name="button" value="false" style={{backgroundColor: "white"}}>False</button>
      </div>
    )
  }
}
export default Question;
