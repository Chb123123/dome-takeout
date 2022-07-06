import axios from '@/utils/request'

export const getShopComment = function (id) {
  return axios({
    method: 'get',
    url: '/ugc/v2/restaurants/' + id + '/ratings'
  })
}
