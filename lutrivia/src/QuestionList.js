import React from 'react';
import Question from './Question'

class QuestionList extends React.Component {

  makeList = () => {
    // console.log(this)
    let i = 0;
    return this.props.questions.map((question) => {
      i += 1;
      return <Question key={i} text={question.text} answer={question.answer} score={this.props.score}/>;
    });
  }

  render() {
    // console.log(this)

    return (
      <div>
        <ul>
          {this.makeList()}
        </ul>
      </div>
    );
  }
}

export default QuestionList;
