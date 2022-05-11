import { useEffect, useRef, useState } from 'react';
import './Body.css'
import { Card } from './Card';
import { PokeAPI } from '../../utils/pokeAPI'
import { Modal } from './Modal'
type bodyProps = {
    itemName?: string
};

type PaginationParams = {
    pageSize: number,
    actualPage: number,
    totalPages: number
}

type ItemParams = {
    name: string,
    url: string
}

export function Body(props: bodyProps) {
    const [pagination, setPagination] = useState<PaginationParams>({ actualPage: 0, pageSize: 20, totalPages: 0 })
    const [itemList, setItemList] = useState<ItemParams[]>([])
    const poke = new PokeAPI();


    function updateList() {
        console.log(props.itemName)
        if(!props.itemName){
            poke.getAllItems(pagination.pageSize * pagination.actualPage, pagination.pageSize).then((response) => {
                setItemList(response.results)
                setPagination({ ...pagination, totalPages: Math.ceil(response.count / pagination.pageSize) })
            })
        }else{
            poke.getItemByName(props.itemName).then((response)=>{
                setItemList(response.results)
                setPagination({ ...pagination, totalPages: 0 })
            })
        }
    }
    useEffect(() => {
        updateList()

    }, [pagination.totalPages])



    function nextPage() {
        if ((pagination.actualPage + 1) < pagination.totalPages) {
            pagination.actualPage++
            updateList()
        }
    }
    function previousPage() {
        if (pagination.actualPage > 0) {
            pagination.actualPage--
            updateList()
        }
    }


    return (
        <main>
            <div className="bodyHeader">
                <div>Resultado de busca</div>
                <Modal />
            </div>
            <div className="tableContainder">
                <div className="card-table" hidden={itemList.length > 0}>
                    {itemList.map(function (item: ItemParams) {
                        return <Card key={item.name} name={item.name} />
                    })}
                </div>
                <div hidden={itemList.length === 0}>

                </div>
            </div>
            <div className="paginator">
                <button className="pageBtn " disabled={pagination.actualPage <= 0} onClick={() => previousPage()}>anterior</button>
                <span>página: {pagination.actualPage + 1}</span>
                <button className="pageBtn " disabled={(pagination.actualPage + 1) >= pagination.totalPages} onClick={() => nextPage()}>próximo</button>

            </div>
        </main>
    );

}







function componentDidmount() {
    throw new Error('Function not implemented.');
}

