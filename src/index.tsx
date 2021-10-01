import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './app/App';
import { ThemeProvider } from './context/ThemeContext';
import { SWRConfig } from 'swr';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './app/store';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <SWRConfig
        value={{
          suspense: true,
          fetcher: (url) => axios.get(url).then((res) => res.data),
        }}
      >
        <ThemeProvider>
          <BrowserRouter>
            <CssBaseline />
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </SWRConfig>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
