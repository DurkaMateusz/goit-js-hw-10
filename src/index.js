import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.headers.common['x-api-key'] =
  'live_zfH1dek3iJc6ScssNG7mJXhxwzqmjPTcE0B6i0KoCCvf25z5QyIBmgb16kk7N589';

const fetchBreeds = () => {
    return axios.get('https://api.thecatapi.com/v1/breeds');
};