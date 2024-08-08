import React from 'react';

interface CommentProps {
  comment: string;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return <div dangerouslySetInnerHTML={{ __html: comment }} />;
};

export default Comment;
