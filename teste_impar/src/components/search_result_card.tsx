import { Divider } from '@mui/material'

import iconFist from '../assets/icon_fist.svg';
import iconTrash from '../assets/icon-trash.svg';
import iconEdit from '../assets/icon-edit.svg';
import { IPokemon } from '../models/pokemon';

type SearchResultCardProps = {
    pokemonData?: IPokemon;
    setShowDeleteCard: React.Dispatch<React.SetStateAction<boolean>>;
    setDeletedId: React.Dispatch<React.SetStateAction<number>>;
};

export function SearchResultCard({ pokemonData, setShowDeleteCard, setDeletedId }: SearchResultCardProps) {
    return (
        <div style={{
            width: 234,
            height: 267,
            boxShadow: '0 0 5px 2px #9b9b9b',
            borderRadius: '8px',
            margin: '1.3% 1% 10% 1%',
        }}>
            <div style={{ paddingTop: '15%', textAlign: 'center' }}>
                <img src={pokemonData?.front_default ?? iconFist} alt="search_result_image" style={{ maxWidth: '35%' }} />
            </div>
            <div style={{ padding: '0 10% 0 10%' }}>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="horizontal" />
            </div>
            <div
                style={{
                    padding: '5% 10% 0 10%',
                    color: '#263238',
                    fontFamily: 'Sans-serif',
                    opacity: '0.7',
                    fontWeight: 'bold',
                    fontSize: '0.9em',
                    overflow: 'hidden',
                }}>
                {pokemonData?.name?.replace(/^\w/, (c) => c.toUpperCase())}
            </div>
            <div>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="horizontal" />
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    paddingTop: '5%',
                }}>
                <span
                    onClick={() => {
                        setShowDeleteCard(true);
                        setDeletedId(pokemonData?.id ?? 0);
                    }}
                    style={{
                        color: '#263238',
                        opacity: '0.6',
                        fontWeight: 'bold',
                        fontFamily: 'Sans-serif',
                        fontSize: '0.85em',
                        width: '100%',
                        cursor: 'pointer',
                    }}>
                    <img src={iconTrash} alt="Excluir" style={{ marginRight: '5%' }} />
                    Excluir
                </span>
                <span
                    style={{
                        color: '#263238',
                        opacity: '0.6',
                        fontWeight: 'bold',
                        fontFamily: 'Sans-serif',
                        fontSize: '0.85em',
                        width: '100%',
                        cursor: 'pointer',
                    }}>
                    <img src={iconEdit} alt="Editar" style={{ marginRight: '5%' }} />
                    Editar
                </span>
            </div>
        </div>
    );
}