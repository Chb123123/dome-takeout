import axios from '@/utils/request.js'

// 获取所有城市列表
export const getAddressDetails = function (id, title) {
  return axios({
    method: 'get',
    url: '/v1/pois',
    params: { city_id: id, keyword: title, type: 'search' }
  })
}
