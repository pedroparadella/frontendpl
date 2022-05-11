import { useState } from 'react';
import './Modal.css'
import iconeCriar from '../../images/icone_criar.png'
import { Separator } from './Separator'


export function Modal() {
    const [show, setShow] = useState<boolean>(false);
    const [inputNome, setInputNome] = useState<string>();
    const [inputImg, setInputImg] = useState<string>();

    const handleClose = () => {
        setShow(false)
        setInputNome("");
        setInputImg("");
    }
    const handleShow = () => {
        setShow(true)
        console.log(show);
    };
    return (
        <>
            <button className="myBtn " onClick={handleShow}>Novo Card</button>
            <div id="myModal" className="modal" style={{ display: show ? 'block' : 'none' }}>

                <div className="modal-content">
                    <div className="modal-header">
                        <h2><img src={iconeCriar} />Criar Card</h2>
                        <div className="closeBtn" onClick={handleClose}>&times;</div>
                    </div>
                    <Separator />
                    <div className="modal-body">
                        <div className="form-chunk">
                            <label>DIGITE UM NOME PARA O CARD</label>
                            <input value={inputNome} placeholder="Digite o título"></input>
                        </div>
                        <div className="form-chunk">
                            <label>INCLUA UMA IMAGEM PARA APARECER NO CARD</label>
                            <input className="inputImg" type="file" value={inputImg} placeholder="Digite o título"></input>
                        </div>

                    </div>
                    <Separator />
                    <div className="modal-footer">
                        <button className="myBtn " onClick={() => { alert("Função de adição de card não implementada."); handleClose }}>Salvar Card</button>
                    </div>
                </div>

            </div>
        </>
    )
}