import {PokemonClient} from 'pokenode-ts';


export function GetListPokemon(initialIndex:number,quant:number):Promise<any>
{
    const client = new PokemonClient();

    return new Promise((resolve,reject)=>{
        client.listPokemons(initialIndex,quant)
            .then((res)=>{
                return resolve(res);
            })
            .catch((e)=>{
                return reject(e.message);
            })
    })
}

export function GetImagePoken(urlJson:string):Promise<string>
{
    let urlSplitted = urlJson.split('/');
    let IdPoke = parseInt(urlSplitted[urlSplitted.length-2]);

    const client = new PokemonClient();

    return new Promise((resolve,reject)=>{
        client.getPokemonFormById(IdPoke)
        .then((res)=>{
            let response = res.sprites.front_default !== null ? res.sprites.front_default:''
            resolve(response);
        })
        .catch((e)=>{
            reject(e.message);
        })
    })
  
}

export class EntityPokemon{
    public name:string;
    public url:string;

    constructor(){
        this.name = ''
        this.url = ''
    }

    SetName(name:string){
        this.name = name;
    }
    SetUrl(url:string){
        this.url = url;
    }
}