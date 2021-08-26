import React, {InputHTMLAttributes} from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({icon: Icon, ...rest}) => (
    <Container>
        <input {...rest} />
        {Icon && <Icon size={30} />}
    </Container>
);
 
export default Input;