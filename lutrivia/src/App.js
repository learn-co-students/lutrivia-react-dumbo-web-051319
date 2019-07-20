import React, { useState } from 'react';
import data from './data'
import Container from './Container'
import Form from './Form'

function App() {
  const [score, setScore] = useState(0)
  const [submittedScore, setSubmittedScore] = useState(0)
  const [user, setUser] = useState("")
  const [allAnswered, setAllAnswered] = useState(false)

  const submitScore = event => {
    event.preventDefault()
    if (allAnswered) {
      setUser(event.target.user.value)
      setSubmittedScore(score)
    } else {
      alert("You didn't answer all questions!")
    }
  }

  const plusOne = event => {
    setScore(score + 1)
  }

  return (
    <div>
      <h1>Lutrivia</h1>
      <h3>Score: {score}</h3>
      <Container
      questions={data.questions}
      plusOne={plusOne}
      setAllAnswered={setAllAnswered}/>
      <Form
      submitScore={submitScore}
      user={user}
      />
      {
        submittedScore !== 0 &&
        <div>
          {user}: {submittedScore}
        </div>
      }
    </div>
  )
}

export default App;
