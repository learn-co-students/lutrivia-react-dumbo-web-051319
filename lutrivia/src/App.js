import React from 'react';

import Header from './components/Header';
import QuestionsList from './components/QuestionsList';
import ScoreForm from './components/ScoreForm';
import data from './data'

function App() {
  return (
    <div>
      <Header />
      <QuestionsList questions={data.questions}/>
      <ScoreForm />
    </div>
  );
}

export default App;
