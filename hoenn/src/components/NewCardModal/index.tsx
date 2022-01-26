import React from 'react';
import Modal from 'react-modal';
import { FiUserPlus } from 'react-icons/fi'

import { NewCardForm, Header, Anexo } from './style';

import Button from '../Button';
import InputText from '../InputText';


interface NewCardModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const notImplementedYet = () => {
    alert("Funcionalidade ainda não implementada");
}

const customStyles = {
    content: {
        top: '0',
        left: '40%',
        right: '0',
        bottom: '0',
    },
};

const NewCardModal: React.FC<NewCardModalProps> = (props) => {

    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            style={customStyles}
        >
            <NewCardForm>
                <Header>
                    <FiUserPlus size="30" />
                    <h2>Criar Card</h2>
                </Header>

                <hr />

                <section>
                    <label htmlFor="card-title">Digite um nome para o card</label>
                    <InputText></InputText>
                </section>

                <section>
                    <label>Inclua uma imagem para o card</label>

                    <Anexo>
                        <label> Nenhum arquivo selecionado</label>
                        <Button
                            name="Escolher arquivo"
                            fcClick={notImplementedYet}
                        />
                    </Anexo>
                </section>

                <hr />

                <Button
                    name="Criar Card"
                    fcClick={notImplementedYet}
                />

            </NewCardForm>


        </Modal>
    );
}

export default NewCardModal;