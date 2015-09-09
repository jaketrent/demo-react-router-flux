import axios from 'axios'

export function fetch() {
  return axios({
    method: 'get',
    url: 'http://data.jaketrent.com/api/v1/books'
  })
}