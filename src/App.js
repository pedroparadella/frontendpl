import CardList from "./Components/CardList/CardList";
import useSWR from "swr";
import { GET_POKEMON, getPokemon } from "./Services/PokeService";

function App() {
    const { data } = useSWR(GET_POKEMON, (url) => getPokemon(url));
    return (
        <div>
            <CardList data={data?.results} />
        </div>
    );
}

export default App;
