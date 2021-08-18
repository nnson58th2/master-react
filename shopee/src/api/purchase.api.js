import { purchaseStatus } from 'src/constants/status'
import http from 'src/utils/http'

const URL = 'purchases'

const purchaseApi = {
  addToCart(data) {
    return http.post(`${URL}/add-to-cart`, data)
  },
  buyPurChases(data) {
    return http.post(`${URL}/buy-products`, data)
  },
  getCartPurchases() {
    return http.get(URL, {
      params: {
        status: purchaseStatus.inCart
      }
    })
  },
  updatePurchase(data) {
    return http.put(`${URL}/update-purchase`, data)
  },
  deletePurchases(ids) {
    return http.delete(URL, ids)
  }
}

export default purchaseApi
