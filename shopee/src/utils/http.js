import axios from 'axios'

// axios({
//   method: 'get',
//   url: 'https://reqres.in/api/users?page=2'
// })
//   .then(res => {
//     console.log('Thành công: ', res)
//   })
//   .catch(error => {
//     console.log('Thất bại: ', error)
//   })

// axios
//   .post(
//     'https://reqres.in/api/users',
//     {
//       name: 'Nguyen Nhu Son'
//     },
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         token: 'e48321648713f'
//       }
//     }
//   )
//   .then(res => {
//     console.log('Thành công: ', res)
//   })
//   .catch(error => {
//     console.log('Thất bại: ', error)
//   })

// const instance = axios.create({
//   baseURL: 'https://reqres.in/api/',
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//     token: 'e48321648713f'
//   }
// })

// instance
//   .post('users', {
//     name: 'Nguyen Nhu Son'
//   })
//   .then(res => {
//     console.log('Thành công: ', res)
//   })
//   .catch(error => {
//     console.log('Thất bại: ', error)
//   })

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://reqres.in/api/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        token: 'e48321648713f'
      }
    })

    this.instance.interceptors.response.use(
      responses => {
        const result = { data: responses.data, status: responses.status }
        return result
      },
      ({ responses }) => {
        const result = { data: responses.data, status: responses.status }
        return Promise.reject(result)
      }
    )

    this.instance.interceptors.request.use(
      config => {
        const accessToken = localStorage.getItem('accessToken')

        if (accessToken) {
          config.headers.authorization = accessToken
        }

        return config
      },
      error => Promise.reject(error.response)
    )
  }
}

const http = new Http().instance

http
  .post('users', {
    name: 'Nguyen Nhu Son'
  })
  .then(res => {
    console.log('Thành công: ', res)
  })
  .catch(error => {
    console.log('Thất bại: ', error)
  })
