import React, { Component } from 'react';
import Card from './Card';

class Container extends Component {
  state = {
    allQuestionsAnswered: false,
    questionCount: 0
  }

  formatCards = () => {
    return this.props.questions.map((question, index) => {
      return <Card
      question={question}
      key={index}
      plusOne={this.props.plusOne}
      oneQuestionAnswered={this.oneQuestionAnswered}/>
    })
  }

  oneQuestionAnswered = event => {
    this.setState({
      questionCount: this.state.questionCount + 1
    }, () => {
      if (this.state.questionCount === this.props.questions.length) {
        this.props.setAllAnswered(true)
      }
    })
  }

  render() {
    return (
      <div>
        {this.formatCards()}
      </div>
    );
  }

}

export default Container;
