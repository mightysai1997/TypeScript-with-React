import React from 'react';

const BadCodingPracticesExample: React.FC = () => {
  const dangerousHtml = '<img src="x" onerror="alert(1)">'; // Unsafe HTML

  return <div dangerouslySetInnerHTML={{ __html: dangerousHtml }} />;
};

export default BadCodingPracticesExample;
