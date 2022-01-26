import React, { InputHTMLAttributes } from 'react';

import { Button } from './style';

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    fcClick: any;
}

const Input: React.FC<ButtonProps> = ({ name, fcClick }) => (
    <Button onClick={fcClick}>
        {name}
    </Button>
);

export default Input;