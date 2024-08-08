import React, { useState } from 'react';

const CommentBox: React.FC = () => {
  const [comment, setComment] = useState<string>('');

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // Potential XSS vulnerability
    document.getElementById('comments')!.innerHTML = comment;
  };

  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={handleCommentChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      <div id="comments"></div>
    </div>
  );
};

export default CommentBox;
