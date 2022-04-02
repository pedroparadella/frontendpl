import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { getPokemonList } from "../services/PokeApi";
import { Header } from "../components/header";
import { SearchBar } from "../components/search_bar";
import { DeleteCard } from "../components/delete_card";
import { RegisterCard } from "../components/register_card";
import { SearchResultCard } from "../components/search_result_card";
import { IPokemon } from '../models/pokemon';

export function SearchPage() {
    const [open, setOpen] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");
    const [pokemonList, setPokemonList] = useState<IPokemon[]>([] as IPokemon[]);
    const [deletedPokemons, setDeletedPokemons] = useState<number[]>([]);
    const [showDeleteCard, setShowDeleteCard] = useState<boolean>(false);
    const [deletedId, setDeletedId] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(0);

    const pages = Math.ceil(pokemonList.length / 15);
    const startIndex = currentPage * 15;
    const endIndex = startIndex + 15;
    const currentPokemonList = pokemonList.slice(startIndex, endIndex);

    useEffect(() => {
        getPokemonList(setPokemonList);
        console.log("Lista de pokemons: ", pokemonList);
    }, []);

    return (
        <div
            style={{
                position: 'relative',
            }}
        >
            <Header />
            <SearchBar
                search={search}
                setSearch={setSearch}
                setPokemonList={setPokemonList}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h5" style={{ padding: '1% 1% 1% 20%', color: '#5F1478', fontWeight: 'bold' }}>
                    Resultado de busca
                </Typography>
                <div style={{ padding: '1% 20% 1% 1%', }}>
                    <Button
                        size="medium"
                        color="info"
                        variant="contained"
                        onClick={() => {
                            setOpen(true);
                        }}
                        style={{
                            textTransform: 'unset',
                            backgroundColor: '#E76316',
                        }}
                    >
                        Novo Card
                    </Button>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    margin: '0% 0% 0% 40%',
                }}
            >
                <DeleteCard
                    id={deletedId}
                    deletedPokemons={deletedPokemons}
                    setDeletedPokemons={setDeletedPokemons}
                    show={showDeleteCard}
                    setShowDeleteCard={setShowDeleteCard}
                />
            </div>
            <RegisterCard open={open} onClose={setOpen} />

            {pokemonList.length > 0 ?
                (<div
                    style={{
                        position: 'relative',
                        borderRadius: '5px',
                        padding: '1%',
                        margin: '1%',
                        textAlign: 'center',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        overflowY: 'scroll',
                        maxHeight: '70vh',
                    }}
                >
                    {
                        (
                            currentPokemonList.map((pokemon, index) => {
                                if (!deletedPokemons.includes(pokemon.id)) {
                                    return (
                                        <SearchResultCard
                                            pokemonData={pokemon}
                                            key={index}
                                            setShowDeleteCard={setShowDeleteCard}
                                            setDeletedId={setDeletedId}
                                        />
                                    );
                                }
                            })
                        )
                    }
                </div>) : <div />}
            {pokemonList.length > 0 ?
                (<div
                    style={{
                        backgroundColor: '#edd1c1',
                        opacity: 0.8,
                        textAlign: 'center',
                        height: 100,
                        borderRadius: '5px',
                        verticalAlign: 'baseline',
                    }}
                >
                    <div
                        style={{
                            top: '40%',
                            position: 'relative',
                        }}
                    >
                        {Array.from(Array(pages), (item, index) => {
                            return <button
                                key={index}
                                value={index}
                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => setCurrentPage(Number(e.currentTarget.value))}
                                style={{
                                    backgroundColor: currentPage === index ? '#E76316' : '#f3c1a5',
                                    borderRadius: '5px',
                                    margin: '0 5px',
                                    fontWeight: 'bold',
                                    width: 70,
                                    height: 40,
                                }}
                            >
                                {index}
                            </button>
                        })}
                    </div>
                </div>) : <div />}
        </div>
    );
}

// Procurar mais de um pokemon de uma vez (Feito)
// Exibir mais de um pokemon de uma vez (Feito)
// Mostrar modal de excluir pokemon (Card de excluir) (Feito)
// Excluir um pokemon (Feito)
// Pesquisa com paginacao (Feito)
// Incluir API do clima tempo ()
// Tentar deixar o codigo menos acoplado ()
// Resolver bug da UI nao atualiazando ()