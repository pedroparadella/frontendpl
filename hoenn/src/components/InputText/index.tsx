import React, { InputHTMLAttributes, FormHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './style';

const InputText: React.FC = ({ ...rest }) => (


    <Container >
        <input {...rest} />
    </Container>
);

export default InputText;