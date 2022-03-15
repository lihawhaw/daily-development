import dayjs from 'dayjs'

export function getLocalStorage(name: string) {
  return window.localStorage.getItem(name)
}

export function formatDateTime(date: string, temp = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(date).format(temp)
}
