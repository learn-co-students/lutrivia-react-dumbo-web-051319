import React from 'react';
import Question from './Question'

class QuestionList extends React.Component {


  render() {
    const makeList = () => {
      // console.log(this.props.questions)
      return this.props.questions.map((question) => {
        return <Question text={question.text}/>
        // debugger;
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
