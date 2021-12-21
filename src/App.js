import react from "react";
import Menu from './Menu'
import Banner from './Banner'
import AddNewCard from "./AddNewCard";
import Cards from './Cards'
import Search from './Search'

export default function App(){
    return(
        <>
        <div class="container">

        <Menu />
        <Banner />
        <Search />
        <AddNewCard />
        <Cards />
        </div>
        </>
    )
}

