import {GetListPokemon,GetPokemonByName} from '../Services/PokemonService'
import {NewPokemonList,Search} from '../Actions/PokeActions'
import { ShowToast } from '../Services/ToastService';

export const PokeThunk = {
    NewListPoke:(payload:any) => (dispatch:any) => {
        GetListPokemon(payload,30).then(response => dispatch(NewPokemonList(response)))
    },
    GetPokeByName:(payload:string) => (dispatch:any) =>{
        GetPokemonByName(payload)
            .then(response => dispatch(Search(response)))
            .catch((e)=>{
                ShowToast("Nenhum Pokemon encontrado.")
            });
    }
}