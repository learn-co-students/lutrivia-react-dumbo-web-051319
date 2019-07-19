import React, { useState } from 'react';

const Card = ({ question, plusOne, oneQuestionAnswered }) => {
  const [ disabled, setDisabled ] = useState(0)

  const handleClick = event => {
    if (event.target.value === question.answer.toString()) {
      plusOne()
      event.target.style.backgroundColor = "green"
    } else {
      event.target.style.backgroundColor = "red"
    }
    // changes buttons to disabled
    setDisabled(true)
    oneQuestionAnswered()
  }
  return (
    <div>
    {question.text}
    <button onClick={handleClick} disabled={disabled} value='true'>
    True
    </button>
    <button onClick={handleClick} disabled={disabled} value='false'>
    False
    </button>
    </div>
  );
}

export default Card;
