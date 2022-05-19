import ReactDOM from 'react-dom'
import React, { useEffect, useState } from 'react'
import "./Card.css"
import pokeDollar from '../../images/PokémonDollar_ColoXD.png'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons'
import { Separator } from './Separator'
import axios from 'axios'


interface Props {
    name: string
}

interface IItem {
    name: string,
    sprite: string,
    cost: string
}

export default function Card(props: Props) {
    const [item, setItem] = useState<IItem>({name: '', sprite: '', cost: ''})

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/item/' + props.name).then(response => {
            setItem({ name: response.data.name, cost: response.data.cost, sprite: response.data.sprites.default})
        })
    }, [])



    return (
        <div className="card">
            <div className="imgContainer center">
                <div className="imgCircle center">
                    <img src={item.sprite} />
                </div>
            </div>
            <Separator />
            <div className="namePriceContainer center">
                <p>{item.name}</p>
                <p><img className="pokeDollar" src={pokeDollar} />{item.cost}</p>

            </div>
            <div className="btnContainer center">
                <div id="excluirBtn" onClick={() => alert("Função de exclusão não implementada")}> {/*<FontAwesomeIcon icon={faTrashCan} />*/}Excluir</div>
                <div id="editarBtn" onClick={() => alert("Função de edição não implementada")}>{/*<FontAwesomeIcon icon={faPencil} />*/}Editar</div>
            </div>
        </div>
    )
}

