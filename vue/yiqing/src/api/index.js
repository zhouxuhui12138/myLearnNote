import request from "@/utils/request"

// 疫情数据
export const getNcovAPI = params => {
  return request({
    method: "GET",
    url: '/ncov/index',
    params
  })
}

// 省市数据
export const getNcovCityAPI = params => {
  return request({
    method: "GET",
    url: '/txapi/ncovcity/index',
    params
  })
}
