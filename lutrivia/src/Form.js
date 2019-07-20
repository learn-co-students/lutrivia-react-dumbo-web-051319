import React, { useState } from 'react';

const Form = ({submitScore, user}) => {
  const [ name, setName ] = useState("")

  const handleChange = event => {
    setName(event.target.value)
  }

  const handleSubmit = event => {
    submitScore(event)
  }

  if (user) {
    return (
      <h3>
      Score submitted. Thanks for playing!
      </h3>
    )
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
      type='text'
      name='user'
      placeholder='Your name'
      value={name}
      onChange={handleChange}/>
      <input type='submit' />
    </form>
  );

}

export default Form;
