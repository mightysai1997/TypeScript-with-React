// src/components/UnsafeFileFetchComponent.tsx
import React, { useState } from 'react';
import axios from 'axios';

const UnsafeFileFetchComponent: React.FC = () => {
  const [filePath, setFilePath] = useState<string>('');
  const [fileContent, setFileContent] = useState<string | null>(null);

  const fetchFile = () => {
    // Constructing file path from user input
    axios.get(`/api/files/${filePath}`)
      .then(response => setFileContent(response.data))
      .catch(error => console.error('Error fetching file:', error));
  };

  return (
    <div>
      <h1>Fetch File with Path Traversal</h1>
      <input
        type="text"
        value={filePath}
        onChange={e => setFilePath(e.target.value)}
        placeholder="Enter file path"
      />
      <button onClick={fetchFile}>Fetch File</button>
      <pre>{fileContent}</pre>
    </div>
  );
};

export default UnsafeFileFetchComponent;
