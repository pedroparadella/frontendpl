import React, { InputHTMLAttributes, FormHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { SearchForm } from './style';

interface FormProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
    fcSubmit: any;
}

const Form: React.FC<FormProps> = ({ icon: Icon, fcSubmit, ...rest }) => (


    <SearchForm onSubmit={fcSubmit}>
        <input {...rest} />
        {Icon && <Icon size={30} onClick={fcSubmit} />}
    </SearchForm>
);

export default Form;