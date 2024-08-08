// Vulnerable code sending a POST request without CSRF protection
import React from 'react';

const submitForm = async () => {
  await fetch('/api/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: 'example' })
  });
};

const SubmitButton: React.FC = () => {
  return <button onClick={submitForm}>Submit</button>;
};

export default SubmitButton;
