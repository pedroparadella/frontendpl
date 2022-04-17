import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from './styles'

//images
import cloud from '../../assets/icons/cloud.png'
import close from '../../assets/icons/close.png'

const Time = ({ isTimeOpened, handleClickTime }) => {
  const [data, setData] = useState(null);
  const [noData, setNoData] = useState(false);


  useEffect(() => {
    axios.get(process.env.REACT_APP_URL_CLIMA)
      .then(res => {
        if(res.data.length > 0){
          setData(res.data)
        } else {
          setNoData(true)
        }
      }
      )

  }, [])

  const renderTimeBox = () => {
    return (
      <S.TimeBox isOpen={isTimeOpened} >
        {!noData && (
          <>
            <S.Country>{data[0]?.country}</S.Country>
          <S.Date>{data[0]?.date.split('-').reverse().join('/')}</S.Date>
          <S.Text>{data[0]?.text}</S.Text>
          </>
        )}
        {noData && (
          <S.Country>Infelizmente a API não está retornanda nada! Mas assim que ela voltar a funcionar as informações aparecerão aqui :)</S.Country>
        )}
        <S.CloseButton onClick={handleClickTime}>
          <S.Close src={close} alt="Fechar" onClick={handleClickTime} />
        </S.CloseButton>
      </S.TimeBox>
    )
  }

  const renderCloud = () => {
    return (

      <S.CloudButton isOpen={isTimeOpened} onClick={handleClickTime} disabled={isTimeOpened} >
        <S.Cloud src={cloud} alt="Cloud" />
      </S.CloudButton>

    )
  }

  return (
    <S.Container>
      {isTimeOpened ? renderTimeBox() : renderCloud()}
    </S.Container>
  )
}

export default Time;