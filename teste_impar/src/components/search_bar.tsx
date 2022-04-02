import { IPokemon } from "../models/pokemon";
import SearchIcon from '@mui/icons-material/Search';
import { Paper, InputBase, IconButton, Divider, Grid } from '@mui/material';
import { getPokemon, getPokemonList } from "../services/PokeApi";
import { StyledSearchBar } from "../styles/search_bar.style";
import fundoBusca from "../assets/fundo-busca.png";

type SearchBarProps = {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setPokemonList: React.Dispatch<React.SetStateAction<IPokemon[]>>;
}

export function SearchBar({ search, setSearch, setPokemonList }: SearchBarProps) {

    return (
        <div style={{ backgroundImage: `url(${fundoBusca})`, position: 'relative' }}>
            <StyledSearchBar>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 900, height: 60, borderRadius: '10px' }}
                >
                    <Grid item xs={3} />
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Digite aqui sua busca..."
                        inputProps={{ 'aria-label': 'Digite aqui sua busca...' }}
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <Divider sx={{ height: 40, m: 0.9 }} orientation="vertical" />
                    <IconButton
                        sx={{ p: '10px' }}
                        aria-label="search"
                        onClick={() => {
                            if (search.length > 0) {
                                getPokemon(search, setPokemonList);
                            } else {
                                getPokemonList(setPokemonList);
                            }
                            setSearch("");
                        }}
                    >
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </StyledSearchBar>
        </div>
    );
}