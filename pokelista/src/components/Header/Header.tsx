import './Header.css'
import logo from "../../images/logo-teste.png"
import lupa from "../../images/lupa.png"
import { useState } from 'react';
type headerProps = {
  itemNameHandler: Function;
};

export function Header(props: headerProps) {

  const [itemName, setItemName] = useState<string>("")

  return (
    <header>
      <div className="ribbon">
        <img src={logo} />
      </div>
      <div className="header-content">
        <input className="input-search" type="text" value={itemName} onChange={(e) => { setItemName(e.target.value) }} placeholder="Digite aqui sua busca..." />
        <img className="search-icon" alt=" " src={lupa} onClick={() => {console.log("header: ", itemName);props.itemNameHandler(itemName)}} />
      </div>
    </header>
  );
}
