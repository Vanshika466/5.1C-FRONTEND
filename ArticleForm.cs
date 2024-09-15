import React, { useState } from 'react';

const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div>
      <h2>Post an Article</h2>
      <input 
        type="text" 
        placeholder="Article title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea 
        placeholder="Article content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button>Submit</button>
    </div>
  );
};

export default ArticleForm;
