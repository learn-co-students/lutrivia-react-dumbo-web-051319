import React from 'react';
import QuestionList from './QuestionList'


class App extends React.Component {
  constructor() {
  super()
  this.state = {
      title: "Player",
      score: 0
    }
  }

  changeTitle = (event) => {
    event.preventDefault()
    let newTitle = this.state.title
    newTitle = event.target.name.value
    this.setState({
      title: newTitle
    })
  }

  updateTop = () => {
    return this.state.title + " with score " + this.state.score
  }

  updateScore = () => {
    let newScore = this.state.score
    newScore ++
    this.setState({
      score: newScore
    })
  }

  pageRelod = () => {
    window.location.reload()
  }

  render(){
    return (
      <div>
        <h1>Lutrivia</h1>
        <h3>{this.updateTop()}</h3>
        <div>
          <button onClick={this.pageRelod} type="button" name="button">New Game</button>
          <span>Score <span id="score">{this.state.score}</span></span>
        </div>
        <QuestionList onQuestionList={this.updateScore}/>
        <div>
          <form onSubmit={this.changeTitle} className="NameForm" >
            <input type="text" name="name" placeholder="Name"/>
            <input type="submit" value="Sbumit score"/>
          </form>
        </div>
      </div>
    )
  }
}

export default App;
