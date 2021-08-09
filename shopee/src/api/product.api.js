import http from 'src/utils/http'

const URL = 'products'

const productApi = {
  getProducts(config) {
    return http.get(URL, config)
  },
  getProductById(id) {
    return http.get(`${URL}/${id}`)
  }
}

export default productApi
