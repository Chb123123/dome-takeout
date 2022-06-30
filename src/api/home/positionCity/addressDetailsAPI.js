import axios from '@/utils/request.js'

// 获取搜索推荐城市详情信息
export const getAddressDetails = function (id, title) {
  return axios({
    method: 'get',
    url: '/v1/pois',
    params: { city_id: id, keyword: title, type: 'search' }
  })
}
