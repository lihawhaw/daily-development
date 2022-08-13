import { articleApi } from '@/api/article'
import { IArticleListItem } from '@/api/article.d'
import { formatDateTime } from '@/utils'
import { Table } from 'antd'
import { useCallback, useEffect, useState } from 'react'

export const ArticleListPage = () => {
  const [pageCurrent, setPageCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [list, setList] = useState<IArticleListItem[]>([])
  const [total, setTotal] = useState(0)

  const fetchData = useCallback(async () => {
    const data = await articleApi.articleList({
      pageCurrent,
      pageSize,
    })
    setTotal(data.total)
    setList(data.records)
  }, [pageCurrent, pageSize])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div>
      <Table<IArticleListItem>
        columns={[
          {
            title: '标题',
            dataIndex: 'title',
            width: '30%',
          },
          {
            title: '创建人',
            dataIndex: 'user',
            render: user => `${user.nickname}(${user.username})`,
          },
          {
            title: '创建时间',
            dataIndex: 'create_time',
            render: value => formatDateTime(value),
          },
          {
            title: '修改时间',
            dataIndex: 'update_time',
            render: value => formatDateTime(value),
          },
        ]}
        rowKey='id'
        dataSource={list}
        pagination={{
          total,
          onChange: (page: number, pageSize: number) => {
            setPageCurrent(page)
            setPageSize(pageSize)
          },
          showTotal: total => `共 ${total} 条`,
        }}
      />
    </div>
  )
}
