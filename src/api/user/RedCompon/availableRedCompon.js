import axios from '@/utils/request.js'

// 获取可用红包
export const getAvailableRedCompon = function () {
  return axios({
    method: 'get',
    url: '/promotion/v2/users/1/hongbaos',
    params: { limit: 20, offset: 0 }
  })
}
