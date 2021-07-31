import http from 'src/utils/http'

const authApi = {
  login(data) {
    return http.post('login', data)
  },
  register(data) {
    return http.post('register', data)
  }
}

export default authApi
