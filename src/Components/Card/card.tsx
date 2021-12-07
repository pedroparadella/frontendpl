import React,{useEffect,useState} from 'react'
import { ButtonFunction, ButtonImg, CardButton, CardButtonsContainer, CardContainer, CardImage, CardImageContainer, CardImageHolder, CardTitle, CardTitleContainer } from './card-elements'

import logoIMG from '../../assets/logos/icone.svg'
import editIMG from '../../assets/logos/Icon-edit.svg'
import trashIMG from '../../assets/logos/Icon-trash.svg'

import {GetImagePoken} from '../../Services/PokemonService'

export function Card(props:any) {

    const [PokeImg,SetPokeImg] = useState('');

    useEffect(() => {
        if(props.secondaryJson)
            GetImagePoken(props.secondaryJson)
                .then((res)=>SetPokeImg(res))
    }, [props])

    return (
        <CardContainer>
            <CardImageHolder>
                <CardImageContainer>
                    {
                        PokeImg.length > 0 ? <CardImage src={PokeImg}/>:<CardImage src={logoIMG}/>
                    }
                </CardImageContainer>
            </CardImageHolder>
            <CardTitleContainer>
                <CardTitle>{props.title}</CardTitle>
            </CardTitleContainer>
            <CardButtonsContainer>
                <CardButton>
                    <ButtonImg src={trashIMG}/>
                    <ButtonFunction>Excluir</ButtonFunction>
                </CardButton>
                <CardButton>
                    <ButtonImg src={editIMG}/>
                    <ButtonFunction>Editar</ButtonFunction>
                </CardButton>
            </CardButtonsContainer>
        </CardContainer>
    )
}
