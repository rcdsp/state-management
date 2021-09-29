import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';
import { SessionProvider } from './state/SessionContext';
import { SWRConfig } from 'swr';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <SessionProvider>
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
    </SessionProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
