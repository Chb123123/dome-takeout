import axios from '@/utils/request.js'

// 获取搜索时的推荐地址
export const getSubmitShopping = function (title, keyword) {
  return axios({
    method: 'get',
    url: '/v4/restaurants',
    params: { geohash: title, keyword: keyword }
  })
}
