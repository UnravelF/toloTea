import { request } from "./request";

// 获取轮播图数据
export function getHomeBanner() {
  return request({
    url: '/home/banner'
  })
}

// 获取底部图标数据
export function getHomeFooter() {
  return request({
    url: '/home/footer'
  })
}
