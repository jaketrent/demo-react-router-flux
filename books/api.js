var axios = require('axios')

function fetch() {
  return axios({
    url: 'http://data.jaketrent.com/api/v1/books'
  })
}

exports.fetch = fetch