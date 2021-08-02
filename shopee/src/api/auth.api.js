import http from 'src/utils/http'

const authApi = {
  login(data) {
    return http.post('login', data)
  },
  register(data) {
    return http.post('register', data)
  },
  logout() {
    return http.post('logout')
  }
}

export default authApi
