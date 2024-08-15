import React, { useState } from 'react';
import axios from 'axios';

const FileFetcher: React.FC = () => {
  const [filePath, setFilePath] = useState('');
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFetchFile = async () => {
    // Validate file path to prevent directory traversal attacks
    if (filePath.includes('..') || filePath.includes('/')) {
      setError('Invalid file path');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3000/file`, {
        params: { path: filePath }
      });
      setFileContent(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching file:', err);
      setError('Failed to fetch file');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={filePath}
        onChange={(e) => setFilePath(e.target.value)}
        placeholder="Enter file path"
      />
      <button onClick={handleFetchFile}>Fetch File</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {fileContent && <pre>{fileContent}</pre>}
    </div>
  );
};

export default FileFetcher;
