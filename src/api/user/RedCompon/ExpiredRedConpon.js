import axios from '@/utils/request.js'

// 获取过期红包
export const getExpiredRedCompon = function () {
  return axios({
    method: 'get',
    url: '/promotion/v2/users/1/expired_hongbaos',
    params: { limit: 20, offset: 0 }
  })
}
