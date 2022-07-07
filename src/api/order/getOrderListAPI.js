import axios from '@/utils/request.js'

// 获取订单列表详情
export const getOrderList = function (count1, count2) {
  return axios({
    method: 'get',
    url: '/bos/v2/users/1/orders',
    // limit获取的订单数量， offset订单偏移的数量
    params: { limit: count1, offset: count2 }
  })
}
