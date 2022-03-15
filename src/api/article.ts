import { IArticleListItem, IArticleListParams } from './article.d'
import { FETCH_METHOD, request } from './axios'

export const articleApi = {
  articleList(params: IArticleListParams) {
    return request<{ total: number; records: IArticleListItem[] }>(FETCH_METHOD.GET, '/api/article/list', params)
  },
}
