import axios from 'axios';

export default axios.create({
  baseURL: 'http://apiadvisor.climatempo.com.br/api/v1/anl/synoptic/locale'
});
