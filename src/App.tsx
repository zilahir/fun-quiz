import React from 'react';
import { Quiz } from './components/Quiz';
import { questions } from './utils/questions'

function App() {
  return (
    <div className="App">
      <Quiz
        quiz={questions.getAllQuestions()}
      />
    </div>
  );
}

export default App;
