import React, { useState } from 'react';
import axios from 'axios';

const FileFetcher: React.FC = () => {
  const [filePath, setFilePath] = useState('');
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchFile = async () => {
    try {
      const response = await axios.get('/fetch-file', { params: { path: filePath } });
      setFileContent(response.data);
    } catch (err) {
      setError('Failed to fetch file');
    }
  };

  return (
    <div>
      <input type="text" value={filePath} onChange={(e) => setFilePath(e.target.value)} />
      <button onClick={fetchFile}>Fetch File</button>
      {error && <p>{error}</p>}
      {fileContent && <pre>{fileContent}</pre>}
    </div>
  );
};

export default FileFetcher;
