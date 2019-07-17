import React from 'react';

class Question extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
    console.log(this)
    this.state = {
      classTrue: "unclicked",
      classFalse: "unclicked"
    }
  }


  checkAnswerTrue = () => {
    // console.log(this.props.answer)
    if (this.props.answer === true) {
      alert("You're right!")
      // debugger
      this.setState({
        classTrue: "true"
      })} else {
      alert("You're wrong.")
      this.setState({
        classTrue: "false"
      })
    }
  }

  checkAnswerFalse = () => {
    // console.log(this.props.answer)
    if (this.props.answer === false) {
      alert("You're right!")
      this.setState({
        classFalse: "true"
      })} else {
      alert("You're wrong.")
      this.setState({
        classFalse: "false"
      })
    }
  }

  render() {
    // debugger;
    // console.log(this)
    return (
      <li answer={this.props.answer.toString()}>
        {this.props.text}
        <br/>
        <button onClick={this.checkAnswerTrue} className={this.state.classTrue}>True</button><button onClick={this.checkAnswerFalse} className={this.state.classFalse}>False</button>
      </li>
    );
  }
}

export default Question;
