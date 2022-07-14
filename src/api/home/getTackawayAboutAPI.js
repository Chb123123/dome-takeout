import axios from '@/utils/request'

// 获取相关店铺列表
export const TackawayAboutList = function (longitude, latitude, offset = 0, id) {
  return axios({
    method: 'get',
    url: '/shopping/restaurants',
    params: { latitude: latitude, longitude: longitude, offset: offset, order_by: id }
  })
}
