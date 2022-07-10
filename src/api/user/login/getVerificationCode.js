import axios from '@/utils/request.js'

// 获取验证码
export const getverificationCode = function () {
  return axios({
    method: 'post',
    url: '/v1/captchas'
  })
}
