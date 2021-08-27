import React, { InputHTMLAttributes } from 'react';

import { Card } from './style';

interface CardProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    type: string;
    imgSrc: string;

}

const Input: React.FC<CardProps> = ({ ...props }) => (
    <Card>
        <img alt="pikachu" src={props.imgSrc} />
        <hr />
        <div>
            <strong>{props.name}</strong>
            <p>{props.type}</p>
        </div>
    </Card>
);

export default Input;