import React from 'react';
import Question from './Question'

class QuestionList extends React.Component {


  render() {
    let i = 0;
    const makeList = () => {
      return this.props.questions.map((question) => {
        i += 1;
        return <Question key={i} text={question.text} answer={question.answer}/>;
      });
    }

    return (
      <div>
        <ul>
          {makeList()}
        </ul>
      </div>
    );
  }
}

export default QuestionList;
