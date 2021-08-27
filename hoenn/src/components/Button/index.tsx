import React, {InputHTMLAttributes} from 'react';

import { Button } from './style';

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
}

const Input: React.FC<ButtonProps> = ({name}) => (
    <Button>
        {name}
    </Button>
);
 
export default Input;