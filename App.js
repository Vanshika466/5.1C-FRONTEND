import React, { useState } from 'react';
import PostTypeSelector from './components/PostTypeSelector';
import QuestionForm from './components/QuestionForm';
import ArticleForm from './components/ArticleForm';
import './App.css';

function App() {
  const [postType, setPostType] = useState(null);

  return (
    <div className="App">
      <h1>Create a New Post</h1>
      <PostTypeSelector setPostType={setPostType} />
      {postType === 'question' && <QuestionForm />}
      {postType === 'article' && <ArticleForm />}
    </div>
  );
}

export default App;
