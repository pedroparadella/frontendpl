import React from 'react';
import MessageUser from './MessageUser'
export default function AddNewCard(){
    return(
        <>
        <div class="box">
            <h2>Resultado de busca</h2>
            <a onClick={MessageUser} href='buttonNewCard'>Novo Card</a>
        </div>
        </>
    )
}