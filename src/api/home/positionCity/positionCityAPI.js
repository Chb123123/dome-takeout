import axios from '@/utils/request.js'

// 获取所有城市列表
export const getPositionCity = function () {
  return axios({
    method: 'get',
    url: '/v1/cities',
    params: { type: 'group' }
  })
}
