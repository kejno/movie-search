/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-cycle */
import Card from '../Card';
import { getFullMovie } from './getMovie';
import initSlider from './initSlider';
import initSnipper from './iniSnipper';

const input = document.querySelector('.search-input');

export default async function cardGeneration(searchText, page) {
  initSnipper();
  return getFullMovie(page, searchText).then((res) => {
    document.querySelector('.spinner').classList.remove('disable');
    if (res) {
      res.Search.forEach((element) => {
        const {
          Title, Poster, Year, imdbID, imdbRating,
        } = element;

        document.querySelector('.swiper-wrapper').append(new Card(Title, Poster, Year, imdbRating, imdbID).div);
        input.value ? document.querySelector('.info').innerHTML = `Showing results for "${input.value}"` : null;
      });
      document.querySelector('.spinner').remove();
    } else {
      if (input.value) {
        document.querySelector('.info').innerHTML = `No results were found for "${input.value}"`;
      } else {
        document.querySelector('.info').innerHTML = 'Enter words for search.....';
      }
      document.querySelector('.spinner').remove();
    }
    return res;
  }).then((data) => {
    initSlider.update();
    return data;
  });
}
