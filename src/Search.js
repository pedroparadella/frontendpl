import MessageUser from './MessageUser'
export default function Search(){
    return(
        <>
        <div class="divSearch">
            <img class="lupa" src="../img/lupa.png" />
        <input onClick={MessageUser} class="inputSearch" type="text" placeholder="Digite aqui sua busca..."  />
        </div>
        </>
    )
}