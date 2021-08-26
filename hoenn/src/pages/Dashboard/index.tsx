import React, { FormEvent } from "react";
import { FiSearch } from 'react-icons/fi'

import SearchInput from '../../components/SearchInput';

import { Container } from "./style";



const Dashboard: React.FC = () => {
    const HandleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Submit teste");
    }
    return (
        <>
    <Container>
        <form onSubmit={HandleSubmit}>
            <SearchInput icon={FiSearch} name="search" placeholder="Digite aqui a sua busca..." />
        </form>
        
    </Container>
    
    </>
    
    );
};

export default Dashboard;

 