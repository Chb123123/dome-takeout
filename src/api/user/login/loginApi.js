import axios from '@/utils/request.js'

// 登入api
export const loginApi = function (username, password, captchaCode) {
  return axios({
    method: 'post',
    url: '/v2/login',
    data: { username: username, password: password, captcha_code: captchaCode }
  })
}
