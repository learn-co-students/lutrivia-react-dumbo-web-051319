import React from 'react';
import Question from './Question'
import data from './data'

class QuestionList extends React.Component {


  genQuestions = () => {
    let counter = 0
    return data.questions.map(question => {
      counter ++
      return <Question key={counter} onQuestion={this.props.onQuestionList} text={question.text} answer={question.answer}/>
    })
  }

  render(){
    return (
      <div>
        {this.genQuestions()}
      </div>
    )
  }
}
export default QuestionList;
