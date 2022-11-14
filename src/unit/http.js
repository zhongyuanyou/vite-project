import axios from 'axios'
// import { loadEnv } from 'vite'
// const env = loadEnv(mode, './')
// 创建axios
const service = axios.create({
  baseURL: import.meta.env.VITE_BASIC_API,
  timeout: 5000,
})
//post请求头
service.defaults.headers.post['Content-Type'] =
  'multipart/form-data;charset=UTF-8'
service.defaults.headers.Authorization =
  'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6InJDb0Qwb09QS0VxY3dqaDc1WEM4Y0EiLCJ0eXAiOiJKV1QifQ.eyJjbGllbnRfaWQiOiJnb19wYXNzd29yZF9jbGllbnQiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiYXBpMSIsIndkYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwic3ViIjoiNjE3MDE2MjQ4NzgwODgxOTIiLCJhdXRoX3RpbWUiOjE2NjgzOTE3ODYsImlkcCI6ImxvY2FsIiwiYW1yIjoiZ29fcHdkIiwiYWNjb3VudGlkIjoiNjE3MDE2MjQ4NzgwODgxOTIiLCJpc3B0YWNjb3VudCI6IjEiLCJwdHR5cGUiOiIyIiwiaXNwbGF0Zm9ybWFkbWluIjoiMCIsImF1ZCI6WyJhcGkxIiwid2RhcGkiXSwibmJmIjoxNjY4MzkxNzg2LCJleHAiOjE2Njg5OTY1ODYsImlzcyI6Imh0dHA6Ly8xOTIuMTY4LjEwLjYxOjgxMDEvSWRlbnRpdHlTZXJ2ZXIifQ.VPZGLkNrf8cuz7M6xOALVLBjjgzM9fAA8ILiIlOeHTDLrpZxjWLtpYgunRWGKLGyCrMxd7K8Hdpiu514U64KWRJh9-Fo4sMKx9160VA3uYVS2dC4H4wsQtIOloIfyqRwKUeFHuQ3qIvaxrwvmZTB_DJZTa-XQv_oAFMtxoVyx4rjbm9kBdpIqG8r121YZDSTg2wH0TdVgkXumlpjzIYbg0WXBkeBfmvxTQJzZOw6WZoYjKRdLu0854wsIhZNiV8jPJ7jw-FezyoNfitg7_3QshN1WTgf78PomClqUdM4XwiUrfoqWilVcNnGUjfTS86eHwalFdTYtxf-mM44EBRNiw'
// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    console.log('res', response)
    if (response.status == 200) {
      return response.data
    }
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default service
