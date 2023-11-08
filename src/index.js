import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { App } from './App';
import './index.css';
import 'normalize.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        color: 'white',
        bg: 'linear-gradient(-45deg, #fff133, #ee7752, #e73c7e, #23a6d5, #28fc7a)',
        backgroundSize: '300% 300%',
        animation: `gradient 14s ease infinite,
        @keyframes gradient {
    0% {
        background-position: 0% 50%,
    }
    50% {
        background-position: 100% 50%,
    }
    100% {
        background-position: 0% 50%,
  }
    `,
      },
    },
  },
  fonts: {
    body: 'Ysabeau',
    heading: 'Agbalumo',
    // text: 'Brachetto',
  },
});
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename={'/goit-react-hw-08-phonebook'}>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
