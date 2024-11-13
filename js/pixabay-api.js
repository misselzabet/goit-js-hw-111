// pixabay-api.js
const API_KEY = '47057239-824e754b75c5fca36ae14ba66'; // Заміни на свій ключ API
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 12) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page,
    per_page: perPage,
  });

  

  try {
    const response = await fetch(`${BASE_URL}?${params}`);
    if (!response.ok) {
      throw new Error('Error fetching images');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
