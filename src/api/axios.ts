import axios from 'axios'

// 创建实例时设置配置的默认值
const instance = axios.create({
  baseURL: 'http://api.lihaha.cloud',
})

// 在实例已创建后修改默认值
instance.defaults.headers.common['authorization'] = 'x'

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data.data
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)

export enum FETCH_METHOD {
  'GET' = 'GET',
  'POST' = 'POST',
  'PUT' = 'PUT',
  'DELETE' = 'DELETE',
}

export async function request<ResponseData, RequestBody = {}>(
  method: FETCH_METHOD,
  url: string,
  data?: RequestBody,
): Promise<ResponseData> {
  const responseData = await instance.request({
    method,
    url,
    data: method != FETCH_METHOD.GET ? data : null,
    params: method === FETCH_METHOD.GET ? data : null,
  })
  return (await responseData) as unknown as ResponseData
}
