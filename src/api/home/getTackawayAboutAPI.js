import axios from '@/utils/request'

// 获取相关店铺列表
export const TackawayAboutList = function () {
  return axios({
    method: 'get',
    url: '/shopping/restaurants',
    params: { latitude: '27.113819', longitude: '114.993759' }
  })
}
