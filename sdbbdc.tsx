import React, { useEffect } from 'react';

const OriginValidationExample: React.FC = () => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log('Message received:', event.data); // No origin validation
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return <div>Waiting for messages...</div>;
};

export default OriginValidationExample;
