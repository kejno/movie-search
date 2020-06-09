import create from './utils/create';

export default class Card {
  constructor(title, poster, year, rating, id) {
    this.title = title;
    this.poster = poster;
    this.year = year;
    this.rating = rating;
    this.id = id;
    this.spinner = create('div', 'spinner', null, null);
    this.cardHeader = create('a', 'card-header', this.title, null, ['href', `https://www.imdb.com/title/${this.id}`]);
    this.cardBody = create('div', 'card-body', this.spinner, null, ['style', `background-image: url(${this.poster})`]);
    this.cardFooter = create('div', 'card-footer', this.year);
    this.icon = create('img', 'icon-rating', null, null, ['src', '../img/star.png']);
    this.cardImdb = create('div', 'card-imbd', [this.icon, this.rating]);
    this.div = create('div', 'card swiper-slide', [this.cardHeader, this.cardBody, this.cardFooter, this.cardImdb], null);
  }
}
