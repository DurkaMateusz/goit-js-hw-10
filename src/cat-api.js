import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_zfH1dek3iJc6ScssNG7mJXhxwzqmjPTcE0B6i0KoCCvf25z5QyIBmgb16kk7N589';

export const fetchBreeds = () => {
    return axios.get('https://api.thecatapi.com/v1/breeds');
};
export const fetchCatByBreed = (breedId) => {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
};