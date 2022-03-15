export interface IArticleListItem {
  id: number
  title: string
  subTitle: string
  content: string
  status: string
  create_time: string
  update_time: string
  user_id: number
  user: {
    id: number
    username: string
    nickname: string
  }
}

export interface IArticleListParams {
  pageCurrent: number
  pageSize: number
}
