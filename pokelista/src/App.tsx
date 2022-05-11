import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import './reset.css';

export function App() {

const [itemName, setItemName] = useState<string>('')
  function handleName(name:string){
    setItemName(name)
    console.log(name)
  }

  return (
    <>
      <Header itemNameHandler={(name:string)=>handleName(name)} />
      <div>{itemName}</div>
      <Body itemName={itemName}/>

    </>

  );

}

export default App;
