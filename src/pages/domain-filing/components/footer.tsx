import { Space } from 'antd'
import styles from './index.less'

export const FilingFooter = () => {
  return (
    <div className={styles.footer}>
      <Space>
        <a href='http://www.beian.gov.cn/portal/recordQuery' target='_blank' rel='noreferrer'>
          公安备案号33011002015632
        </a>
        <a href='https://beian.miit.gov.cn/#/Integrated/recordQuery' target='_blank' rel='noreferrer'>
          豫ICP备20003355号-2
        </a>
        <span data-title='信息处置系统' data-url='https://gaj.sh.gov.cn/wa/newlogin/recordSearch.jsp' />
      </Space>
    </div>
  )
}
