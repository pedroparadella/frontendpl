import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios'
import { GlobalStyle } from "./components/GlobalStyle";
import Header from "./components/Header";
import './assets/css/fonts.css'
import Main from "./components/Main";
import Time from "./components/Time";


const Container = styled.div`
`;



function App() {
  const [data, setData] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [queryList, setQueryList] = useState([]);
  const [isTimeOpened, setTimeOpened] = useState(false);


  const handleSearch = async (value, isSugestion) => {
    if(isSugestion && value){
      setIsSearching(true);
      setPage(0);
      const filteredData  = allPokemons.filter(item => item.name.toLowerCase() === value.toLowerCase());
      setQueryList(filteredData);

      return
    }

    
    if (value) {
      const filteredData = allPokemons.filter(item => item['name'].toLowerCase().includes(value.toLowerCase()))
      setQueryList(filteredData)
      setPage(0);

    }

  }

  const handleClickTime = () => {
    setTimeOpened(!isTimeOpened)
  }

  const handleDisabladButtons = () => {
    window.alert('Funcionalidade em construção, desculpe!')
  }


  const realData = isSearching ? queryList : data;


  useEffect(() => {
    (async function (_page) {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${_page}&limit=12`);
      const data = res.data

      setData(data.results);
      setCount(data.count);
    })(page)
  }, [page])

  useEffect(() => {
    (async function () {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1200`);
      const data = res.data.results
      setAllPokemons(data)
    })();
  },[])

 
  return (
    <>
      <Container>
        <GlobalStyle />
        <Header
          setIsSearching={setIsSearching}
          handleSearch={handleSearch}
          setPage={setPage}
          allPokemons={allPokemons}
        />
        <Main
          data={realData}
          count={count}
          page={page}
          setPage={setPage}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          handleDisabladButtons={handleDisabladButtons}

        />
        <Time
          isTimeOpened={isTimeOpened}
          handleClickTime={handleClickTime}
        />
      </Container>

    </>
  );
}

export default App;
