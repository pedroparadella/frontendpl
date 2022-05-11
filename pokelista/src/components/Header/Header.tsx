import './Header.css'
import logo from "../../images/logo-teste.png"
import lupa from "../../images/lupa.png"
import { useState } from 'react';
import { PokeAPI } from '../../utils/pokeAPI'
type headerProps = {
  itemNameHandler: Function;
};

export function Header(props: headerProps) {

  const [itemName, setItemName] = useState<string>("")
  const poke = new PokeAPI();
  return (
    <header>
      <div className="ribbon">
        <img src={logo} />
      </div>
      <div className="header-content">
        <input className="input-search" type="text" value={itemName} onChange={(e) => { setItemName(e.target.value) }} placeholder="Digite aqui sua busca..." />
        <img className="search-icon" alt=" " src={lupa} onClick={() => props.itemNameHandler(itemName)} />
      </div>
    </header>
  );
}
