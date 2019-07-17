import React from 'react';
import Header from './Header.js'
import TriviaBox from './TriviaBox.js'
import Footer from './Footer.js'


class App extends React.Component {
  render(){
    // const trivia = this.props.data.questions.map(question => {
    //   return question.text
    // })

    return (
      <div className="App">
        < Header />
        < TriviaBox trivia={this.props.data.questions}/>
        < Footer />
      </div>
    );
  }
}

export default App;
