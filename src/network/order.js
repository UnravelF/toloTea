import { request } from "./request";

// 根据id获取茶品数据
export function getOrderItemByIds(arr) {
  return request({
    url: '/order/nowitem',
    method: 'post',
    data: {
      arr
    }
  })
}

// 获取历史订单数据
export function getPrevItem() {
  return request({
    url: '/order/previtem'
  })
}
