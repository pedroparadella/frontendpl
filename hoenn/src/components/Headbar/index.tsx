import React from 'react';

import { Bar } from './style';

import pokeball from '../../assets/icons8-pokeball-48.png'

const Headbar: React.FC = () => {

    return (
        <Bar>
            <div>
                <img src={pokeball} alt="Pokeball" />
                <h1>Hoenn</h1>
            </div>
        </Bar>
    );
}

export default Headbar;