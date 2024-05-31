// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { getPhotos } from './js/pixabay-api';
import { creatMarkup } from './js/render-functions';
const form = document.querySelector('.search-form');
const galleryList = document.querySelector('.gallery');
form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.searchQuery.value.trim();
  getPhotos(searchQuery)
    .then(res => {
      if (res.hits.length === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      console.log(res);
      galleryList.innerHTML = creatMarkup(res.hits);
    })
    .catch(error => {
      console.log(error);
    });
}
