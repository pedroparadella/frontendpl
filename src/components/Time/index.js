import React, {useState,useEffect} from "react";
import axios from "axios";
import * as S from './styles'

//images
import cloud from '../../assets/icons/cloud.png'
import close from '../../assets/icons/close.png'

const Time = ({isTimeOpened, handleClickTime}) => {
    const [data, setData] = useState(null);


    useEffect(() => {
        axios.get(process.env.REACT_APP_URL_CLIMA)
          .then(res => {
            setData(res.data)
            console.log(res.data)
          }
          )
    
      }, [])

    return (
        <S.Container isOpen={isTimeOpened} >
            {isTimeOpened ? (
                <S.TimeBox>
                    <S.Country>{data[0].country}</S.Country>
                    <S.Date>{data[0].date.split('-').reverse().join('/')}</S.Date>
                    <S.Text>{data[0].text}</S.Text>
                    <S.CloseButton onClick={handleClickTime}>
                        <S.Close src={close} alt="Fechar" onClick={handleClickTime}/>
                    </S.CloseButton>
                </S.TimeBox>) : 
                (
                <S.CloudButton isOpen={isTimeOpened} onClick={handleClickTime}  disabled={isTimeOpened} >
                <S.Cloud  src={cloud} alt="Cloud"/>
            </S.CloudButton>
                )
            }
        </S.Container>
    )
}

export default Time;