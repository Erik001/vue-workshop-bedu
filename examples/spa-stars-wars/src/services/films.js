import axios from 'axios'

/**
 * Function to get all films
 * @returm AxiosPromise
 */
export function getFilms () {
  return axios.get(`https://swapi.co/api/films`)
}
