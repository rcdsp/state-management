import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { SWRConfig } from 'swr';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <SWRConfig
        value={{
          suspense: true,
          refreshInterval: 3000,
          fetcher: (url) => axios.get(url).then((res) => res.data),
        }}
      >
        <BrowserRouter>
          <CssBaseline />
          <App />
        </BrowserRouter>
      </SWRConfig>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
