// This example assumes client-side handling for demonstration purposes.

import React from 'react';
import axios from 'axios';

const DeserializeUntrustedDataExample: React.FC = () => {
  const fetchData = async () => {
    try {
      const response = await axios.post('https://example.com/api/deserialize', {
        data: JSON.stringify({ userInput: 'example' }) // Sending potentially untrusted data
      });

      // Unsafe deserialization (conceptual, usually done server-side)
      const deserializedData = JSON.parse(response.data); // Potentially unsafe
      console.log(deserializedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return <button onClick={fetchData}>Fetch Data</button>;
};

export default DeserializeUntrustedDataExample;
