import { useState } from 'react'
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import './reset.css';
import './App.css'

export function App() {

  const [searchStr, setSearchStr] = useState('')


  return (
    <>
      <Header itemNameHandler={setSearchStr} />
      <Body searchStr={searchStr} />

    </>

  );

}

export default App;
