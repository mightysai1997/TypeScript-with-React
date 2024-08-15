import React from 'react';
import JSZip from 'jszip';

const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (file) {
    const zip = new JSZip();
    const content = await zip.loadAsync(file);
    content.forEach((relativePath, file) => {
      file.async('string').then((fileContent) => {
        // Arbitrary file write vulnerability
        console.log('File content:', fileContent);
      });
    });
  }
};

const FileUploader: React.FC = () => (
  <input type="file" onChange={handleFileUpload} />
);

export default FileUploader;
