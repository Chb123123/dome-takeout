import axios from '@/utils/request.js'

// 获取导航栏商店列表
export const getShopNavPage = function (latitude, longitude, id) {
  return axios({
    method: 'get',
    url: '/shopping/restaurants',
    params: { latitude: latitude, longitude: longitude, restaurant_category_id: id }
  })
}
