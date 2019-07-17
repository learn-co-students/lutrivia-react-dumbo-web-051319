import React from 'react';

class Question extends React.Component {

  constructor(props) {
    super(props)
    // console.log(props)
    this.state = {
      classTrue: "unclicked",
      classFalse: "unclicked"
    }
  }


  checkAnswerTrue = () => {
    // console.log(this.props.answer)
    if (this.props.answer === true) {
      // debugger
      this.setState({
        classTrue: "true"
      })
      this.props.score()
    } else {
      this.setState({
        classTrue: "false"
      })
    }
  }

  checkAnswerFalse = () => {
    // console.log(this.props.answer)
    if (this.props.answer === false) {
      this.setState({
        classFalse: "true"
      })
      this.props.score()
    } else {
      this.setState({
        classFalse: "false"
      })
    }
  }

  render() {
    // debugger;
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
