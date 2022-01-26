import React, { InputHTMLAttributes, FormHTMLAttributes } from 'react';

import { Container } from './style';

const InputText: React.FC = ({ ...rest }) => (

    <Container >
        <input {...rest} />
    </Container>
);

export default InputText;