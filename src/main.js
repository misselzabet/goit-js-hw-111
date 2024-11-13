// main.js
import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery } from './js/renger-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const loader = document.querySelector('.loader');
let query = '';
let page = 1;

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  query = event.target.elements.searchQuery.value.trim();

  
  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search query.' });
    return;
  }

  clearGallery();
  loader.classList.remove('hidden');

  try {
    const data = await fetchImages(query);
    if (data.hits.length === 0) {
      iziToast.warning({
        title: 'No results',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }
    renderImages(data.hits);
  } catch (error) {
    iziToast.error({ title: 'Error', message: 'Something went wrong, please try again.' });
  } finally {
    loader.classList.add('hidden');
  }
});
