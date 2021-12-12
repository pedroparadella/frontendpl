import React from 'react';
import {Provider} from 'react-redux'
import Home from './Pages/Home';
import {Store} from './Store/'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Provider store={Store}>
        <Home/>
        <ToastContainer/>
      </Provider>
    </>
  );
}

export default App;
