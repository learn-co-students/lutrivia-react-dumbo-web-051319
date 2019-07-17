import React from 'react';
import QuestionList from './QuestionList';
import SubmitScore from './SubmitScore';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      score: 0
    }
  }

  updateScore = () => {
    // console.log(this)
    let score = this.state.score
    score += 1
    this.setState({
      score: score
    })
  }

  render() {
    let questions = this.props.data.questions
    // console.log(questions)
    // debugger;
    return (
      <div>
        <h1>Lutrivia</h1>
        <button>New Game</button>
        <h3>Score: {this.state.score}</h3>
        <QuestionList score={this.updateScore} questions={questions}/>
        <SubmitScore defaultValue={this.state.score}/>
      </div>
    );
  }
}

export default App;
