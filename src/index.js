import axios from 'axios';
import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

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

breedSelect.addEventListener('change', (event) => {
  error.style.display = 'none';
  loader.style.display = 'block';
  catInfo.style.display = 'none';
  const breed = event.target.value;
  fetchCatByBreed(breed)
        .then(data => {
          const catData =data.data[0].breeds[0];
          if(catData) {
            catInfo.innerHTML = `
            <p><b>Name:</b> ${catData.name}</p>
            <p><b>Description: </b>${catData.description}</p>
            <p><b>Temperament: </b>${catData.temperament}</p>
            <img src='${data.data[0].url}' width="50%" height="50%"/>`;
          } else {
              catInfo.innerHTML = Notiflix.Notify.failure('No information available for this breed');            
          }
          loader.style.display = 'none';
          catInfo.style.display = 'block';
        })
        .catch(() => {
          loader.style.display = 'none';
          error.style.display = 'block';
        });
});

    
