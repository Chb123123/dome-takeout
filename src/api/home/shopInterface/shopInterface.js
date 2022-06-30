import axios from '@/utils/request.js'

// 店铺相关的商品
export const getShopInterface = function (id) {
  return axios({
    method: 'get',
    url: '/shopping/v2/menu',
    params: { restaurant_id: id }
  })
}
