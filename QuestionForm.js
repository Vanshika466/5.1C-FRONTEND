import React, { useState } from 'react';

const QuestionForm = () => {
  const [question, setQuestion] = useState('');

  return (
    <div>
      <h2>Post a Question</h2>
      <input 
        type="text" 
        placeholder="Enter your question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button>Submit</button>
    </div>
  );
};

export default QuestionForm;
