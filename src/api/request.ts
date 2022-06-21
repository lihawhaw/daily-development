export interface ResponseBody<ResponseData> {
  data: ResponseData
  message: string
  status: number
}

export enum FETCH_METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const PREFIX = '/api/v1'

async function sendRequest<ResponseData>(url: string, headers: RequestInit): Promise<ResponseBody<ResponseData>> {
  const response = await fetch(url, headers)
  const status = response.status
  const data = null as unknown as ResponseData
  let responseData: ResponseBody<ResponseData> = { data, message: '', status }

  if (status === 200) {
    try {
      responseData = await response.json()
      return responseData
    } catch (error) {
      responseData.message = '接口返回的数据非JSON格式，不符合规范'
      return responseData
    }
  }

  responseData.message = `接口 ${String(status)}`
  return responseData
}

function requestHeader<RequestBody = {}>(method: FETCH_METHOD, data: RequestBody = null) {
  //
}

export function request<ResponseData, RequestBody = {}>(
  method: FETCH_METHOD,
  url: string,
  data: RequestBody = null,
  opts = {},
): RequestInit {
  const header: RequestInit = {
    method,
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token') || '',
    },
    credentials: 'same-origin',
    referrer: 'no-referrer',
    ...opts,
  }
  if (method !== FETCH_METHOD.GET) header.body = data ? JSON.stringify(data) : ''
  return header
}
