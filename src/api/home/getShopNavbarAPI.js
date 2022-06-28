import axios from '@/utils/request'

// 首页导航栏
export const getShopNavbar = function () {
  return axios({
    method: 'get',
    url: '/v2/index_entry'
  })
}
