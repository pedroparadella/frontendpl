import { Dispatch, SetStateAction } from 'react';
import axios, { AxiosResponse } from 'axios';
import { token } from './config/clima_tempo_token';
import { IClimaTempo } from '../models/clima_tempo';

export const getClimaTempo = (setClimaTempoText: Dispatch<SetStateAction<string>>) => {

    axios.get('http://apiadvisor.climatempo.com.br/api/v1/anl/synoptic/locale/BR?token=' + token, {
        timeout: 2000,
        withCredentials: false,
        responseType: 'json',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'mode': 'no-cors',
        }

    })
        .then((response: AxiosResponse) => {

            console.log("Clima tempo response: ", response);
            const climaTempo: IClimaTempo = {
                country: response.data.data[0].city.name,
                date: response.data.data[0].date,
                text: response.data.data[0].text,
            };

            setClimaTempoText(climaTempo.text);
        });
}