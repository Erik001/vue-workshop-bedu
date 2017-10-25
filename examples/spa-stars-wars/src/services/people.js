import axios from 'axios'

/**
 * Function to get all star wars characters
 * @return AxiosPromise
 */
export function getPeople (page) {
  return axios.get(`https://swapi.co/api/people/?page=${page}`)
}
