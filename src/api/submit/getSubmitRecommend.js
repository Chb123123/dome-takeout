import axios from '@/utils/request.js'

// 获取搜索时的推荐地址
export const getSubmitRecommend = function (title) {
  return axios({
    method: 'get',
    url: '/v1/pois',
    params: { city_id: 220, keyword: title, type: 'search' }
  })
}
