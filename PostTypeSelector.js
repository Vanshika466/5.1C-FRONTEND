import React from 'react';

const PostTypeSelector = ({ setPostType }) => {
  return (
    <div>
      <button onClick={() => setPostType('question')}>Post a Question</button>
      <button onClick={() => setPostType('article')}>Post an Article</button>
    </div>
  );
};

export default PostTypeSelector;
