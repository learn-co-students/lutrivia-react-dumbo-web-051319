import React from 'react';

class Question extends React.Component {

  render() {
    return (
      <li>
        {this.props.text}
        <br/>
        <button>True</button><button>False</button>
      </li>
    );
  }
}

export default Question;
