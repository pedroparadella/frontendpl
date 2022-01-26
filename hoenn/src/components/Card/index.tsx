import React, { InputHTMLAttributes } from 'react';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';

import { Card, Info, Footer, Divider, Button } from './style';

interface CardProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    type: string;
    imgSrc: string;

}

const notImplementedYet = () => {
    alert("Funcionalidade ainda não implementada");
}

const Input: React.FC<CardProps> = ({ ...props }) => (
    <Card>
        <img alt="img" src={props.imgSrc} />
        <hr />
        <Info>
            <strong>{props.name}</strong>
            <p>{props.type}</p>
        </Info>
        <Footer>
            <Button hoverColor="red">
                <FiTrash2 size="20" color="#dd2f2f" />
                <a href="#" onClick={notImplementedYet}>Excluir</a>
            </Button>
            <Divider />
            <Button hoverColor="#ed8a50" >
                <FiEdit2 size="20" color="#ed8a50" />
                <a href="#" onClick={notImplementedYet}>Editar</a>
            </Button>
        </Footer>

    </Card>
);

export default Input;