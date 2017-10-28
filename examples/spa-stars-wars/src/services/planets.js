import axios from 'axios'

/**
 * Function to get all planets
 * @return AxiosPromise
 */
export function getPlanets () {
  return axios.get(`https://swapi.co/api/planets`)
}
