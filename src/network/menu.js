import { request } from "./request";

// 获取tab导航栏数据网络请求
export function getTabData() {
  return request({
    url: '/menu/menutab'
  })
}

// 获取menu页茶品数据网络请求
export function getMenuItem() {
  return request({
    url: '/menu/menuitem'
  })
}

// 根据id获取选择规格商品
export function getMenuItemById(id) {
  return request({
    url: '/menu/menu/item/',
    params: {
      id
    }
  })
}