import React, { InputHTMLAttributes } from 'react';

import { Card, Info, Footer } from './style';

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
            <a href="#" onClick={notImplementedYet}>Excluir</a>
            <a href="#" onClick={notImplementedYet}>Editar</a>
        </Footer>

    </Card>
);

export default Input;