import React from 'react';

class SubmitScore extends React.Component {

  // constructor(props) {
  //   super(props)
  //   debugger
  //   // this.state = {
  //   //   score: props.score
  //   // }
  // }

  handleChange = () => {
    debugger
    this.value = this.props.score
  }

  displayScore = () => {
    // console.log(this)
    // debugger
    if(this.props.score > 5) {
      alert(`You passed! ${this.props.score}/10 correct. Who cares?`)
    } else {
      alert(`Congratulations! You FAILED. ${this.props.score}/10 correct.`)
    }
  }

  render() {
    // debugger
    return (
      <form onClick={this.displayScore}>
        <input id="score-input" type="text" value={this.props.score} onChange={this.handleChange} />
        <input type="submit" value="Submit score"/>
      </form>
      );
    }
  }

export default SubmitScore;
