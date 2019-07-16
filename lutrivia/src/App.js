import React from 'react';
import QuestionList from './QuestionList';
import SubmitScore from './SubmitScore';

class App extends React.Component {
  render() {
    let questions = this.props.data.questions
    // console.log(questions)
    // debugger;
    return (
      <div>
        <h1>Lutrivia</h1>
        <button>New Game</button>
        <h3>Score: 0</h3>
        <QuestionList questions={questions}/>
        <SubmitScore />
      </div>
    );
  }
}

export default App;
