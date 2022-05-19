
import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import Card from './Card';

interface Props {
    searchStr: string
}

interface IItem {
    name: string,
}



export default function List(props: Props) {
    const [lista, setLista] = useState<IItem[]>([])
    const [nextPage, setNextPage] = useState<string>()
    const [previousPage, setPreviousPage] = useState<string>()
    useEffect(() => {
        if(props.searchStr){
            console.log("list com props: ", props)
            axios.get('https://pokeapi.co/api/v2/item/' + props.searchStr).then(
                response => {
                    setLista([{ name:response.data.name }])
                    setNextPage(response.data.next)
                    setPreviousPage(response.data.previous)
                }
                ).catch(error => {
                    console.log(error)
                })
            }else{
            console.log("list sem props: ", props)
            axios.get('https://pokeapi.co/api/v2/item/').then(
                response => {
                    setLista(response.data.results)
                    setNextPage(response.data.next)
                    setPreviousPage(response.data.previous)
                }
            ).catch(error => {
                console.log(error)
            })
        }
    }, [props])

    function goToNextPage() {
        if (nextPage) {
            axios.get(nextPage).then(response => {
                setLista(response.data.results)
                setNextPage(response.data.next)
                setPreviousPage(response.data.previous)
            }).catch(error => {
                console.log(error)
            })
        }
    }

    function goToPreviousPage() {
        if (previousPage) {
            axios.get(previousPage).then(response => {
                setLista(response.data.results)
                setNextPage(response.data.next)
                setPreviousPage(response.data.previous)
            }).catch(error => {
                console.log(error)
            })
        }
    }



    return (
        <>
            {lista.length ? <div className="tableContainder" >
                <div className="card-table" >
                    {lista.map(function (item: IItem) {
                        return <Card key={item.name} name={item.name} />
                    })}
                </div>
                <div className="paginator">
                    <button className="pageBtn " hidden={!previousPage}onClick={goToPreviousPage}>anterior</button>

                    <button className="pageBtn " hidden={!nextPage} onClick={goToNextPage}>próximo</button>
                </div>
            </div> :
                <div>
                    <h2>Sem resultados.</h2>
                </div>}
        </>
    )

}