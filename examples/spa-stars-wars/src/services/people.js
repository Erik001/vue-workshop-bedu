import axios from 'axios'

/**
 * Function to get all star wars characters
 * @return AxiosPromise
 */
export function getPeople (page) {
  return axios.get(`https://swapi.co/api/people/?page=${page}`)
}

/**
 * Function to get a person by id
 * @param {Number} personId
 * @return AxiosPromise
 */
export function getPerson (personId) {
  return axios.get(`https://swapi.co/api/people/${personId}`)
}
