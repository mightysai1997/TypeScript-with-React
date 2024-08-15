import React, { useEffect } from 'react';

const OriginValidationExample: React.FC = () => {
  useEffect(() => {
    const handleRequest = (event: MessageEvent) => {
      // No origin validation
      console.log('Message received:', event.data);
    };

    window.addEventListener('message', handleRequest);

    return () => {
      window.removeEventListener('message', handleRequest);
    };
  }, []);

  return <div>Origin Validation Example</div>;
};

export default OriginValidationExample;
