// This is a hypothetical example of a React component used in an Electron app
import React from 'react';
import { BrowserWindow } from 'electron';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Insecure configuration
      contextIsolation: false, // Insecure configuration
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadURL('http://example.com'); // Loading insecure content
};
