/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
const getMovie = async (page, resp) => {
  const url = `https://www.omdbapi.com/?s=${resp}&page=${page}&apikey=d8993f1`;
  const res = await fetch(url);
  return res;
};
const getImdbID = async (value) => {
  const url = `https://www.omdbapi.com/?i=${value}&apikey=d8993f1`;
  const res = await fetch(url);
  return res;
};

export const getFullMovie = (page, resp) => getMovie(page, resp)
  .then((res) => res.json())
  .then((data) => {
    if (data.Response !== 'False') {
      const promises = [];
      data.Search.forEach((elem, i) => {
        promises.push(
          getImdbID(elem.imdbID)
            .then((res) => res.json())
            .then((movie) => {
              data.Search[i].imdbRating = movie.imdbRating;
            })
            .catch((err) => console.log(err.message)),
        );
      });
      return Promise.all(promises).then(() => data);
    }
  });
