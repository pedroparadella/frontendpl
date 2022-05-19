import { useEffect, useRef, useState } from 'react';
import './Body.css'

import { Modal } from './Modal'
import List from './List';

interface Props {
    searchStr: string
};

export function Body(props: Props) {
    return (
        <main>
            <div className="bodyHeader">
                <div>Resultado de busca</div>
                <Modal />
            </div>
            <List searchStr={props.searchStr} />

        </main>
    );

}


