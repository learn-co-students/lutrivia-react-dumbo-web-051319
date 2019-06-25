import React, { Component } from 'react';

import Question from './Question';

class QuestionsList extends Component {

  render() {
    const questionComponents = this.props
      .questions
      .map(question => {
        return <Question
          key={question.text}
          text={question.text}
          answer={question.answer} />
      })
    return (
      <ul>
        {questionComponents}
      </ul>
    );
  }

}

export default QuestionsList;
