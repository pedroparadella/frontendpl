import ReactDOM from 'react-dom'
import React, { useState } from 'react'
import "./Card.css"
import pokeDollar from '../../images/PokémonDollar_ColoXD.png'
import { PokeAPI } from '../../utils/pokeAPI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons'
import {Separator} from './Separator'
type cardProps = {
    name: string;
};


export function Card(props: cardProps) {
    const [sprite, setSprite] = useState<string>("")
    const [cost, setCost] = useState<string>("")
    const api = new PokeAPI()

    api.getItemByName(props.name).then((result) => {
        setSprite(result.sprites.default)
        setCost(result.cost)
    })



    return (

        <div className="card">
            <div className="imgContainer center">
                <div className="imgCircle center">
                    {/* <img src={sprite} /> */}
                </div>
            </div>
            <Separator />
            <div className="namePriceContainer center">
                <p>{props.name}</p>
                <p><img className="pokeDollar"src={pokeDollar} />{cost}</p>

            </div>
            <div className="btnContainer center">
                <div id="excluirBtn" onClick={() => alert("Função de exclusão não implementada")}> <FontAwesomeIcon icon={faTrashCan} />Excluir</div>
                <div id="editarBtn"onClick={() => alert("Função de edição não implementada")}><FontAwesomeIcon icon={faPencil} />Editar</div>
            </div>
        </div>
    )
}

