import React from 'react';

class SubmitScore extends React.Component {

  constructor(props) {
    // debugger
    super(props)
    this.state = {
      score: this.props.defaultValue
    }
  }

  render() {
    return (
      <form>
        <input id="score-input" type="text"  defaultValue={this.state.score} />
        <input type="submit" value="Submit score"/>
      </form>
    );
  }
}

export default SubmitScore;
