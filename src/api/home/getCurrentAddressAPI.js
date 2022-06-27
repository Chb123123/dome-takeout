import axios from '@/utils/request.js'

// 获取当前所在的城市
export const getCurrentAddress = function () {
  return axios({
    method: 'get',
    url: '/v1/cities',
    params: { type: 'guess' }
  })
}
