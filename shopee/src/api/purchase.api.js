import http from 'src/utils/http'

const URL = 'purchases'

const purchaseApi = {
  addToCart(data) {
    http.post(`${URL}/add-to-cart`, data)
  }
}

export default purchaseApi
