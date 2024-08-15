import React, { useEffect } from 'react';

const MessageReceiver: React.FC = () => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Insufficient validation
      console.log('Received message:', event.data);
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return <div>Message Receiver</div>;
};

export default MessageReceiver;
