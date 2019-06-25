import React, { Component } from 'react';

class Question extends Component {

  render() {
    return (
      <li>
        {this.props.text}
        <button>True</button>
        <button>False</button>
      </li>
    );
  }

}

export default Question;
