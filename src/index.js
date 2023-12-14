import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.headers.common['x-api-key'] =
  'live_zfH1dek3iJc6ScssNG7mJXhxwzqmjPTcE0B6i0KoCCvf25z5QyIBmgb16kk7N589';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

const fetchBreeds = () => {
    return axios.get('https://api.thecatapi.com/v1/breeds');
};

fetchBreeds() 
    .then(data => {
        const options = data.data;
        loader.style.display = 'block';
        error.style.display = 'none';
        breedSelect.innerHTML = options
            .map(breed => `<option value="${breed.id}">${breed.name}</option>`).join('');
        loader.style.display = 'none';
    })
    .catch(() => {
        loader.style.display = 'none';
        error.style.display = 'block';
      })
      .finally(() => {
        breedSelect.style.display = 'block';
      });

