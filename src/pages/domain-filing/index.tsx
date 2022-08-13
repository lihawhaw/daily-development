import { Link } from '@@/exports'
import { Carousel, Image, Space, Tabs } from 'antd'
import styles from './index.less'

const { TabPane } = Tabs

export default function DomainFilingPage() {
  const images = [
    {
      sourceSrc: 'https://cdn.tx.picgo.lihaha.cloud/app/202201161331953.webp',
    },
    {
      sourceSrc: 'https://cdn.tx.picgo.lihaha.cloud/app/202201161331254.webp',
    },
    {
      sourceSrc: 'https://cdn.tx.picgo.lihaha.cloud/app/202201161330418.webp',
    },
  ]

  return (
    <div className={styles.wrapper} data-update-time='202206250100'>
      <header className={styles.header}>
        <h1>极致源于梦想</h1>
      </header>

      <main className={styles.main}>
        <Tabs>
          <TabPane tab='相册' key='1'>
            <Carousel autoplay dotPosition={'bottom'}>
              {images.map((item, idx) => {
                return (
                  <Image key={item.sourceSrc + idx} src={item.sourceSrc} height='calc(100vh - 100px - 100px - 100px)' />
                )
              })}
            </Carousel>
          </TabPane>
          <TabPane tab='关于' key='2'>
            <div>
              <p>
                本人精通 HTML、CSS、JavaScript、PHP、ASP、C、C++、C#、Java、Python <Link to={'jotai'}>jotai</Link>{' '}
                <Link to={'/echarts'}>echarts</Link> 等单词的拼写
              </p>

              <p>擅长 Ai、Fw、Fl、Br、Ae、Pr、Id、Ps 等软件的安装与卸载</p>

              <p>熟悉 Windows、Linux、OS X、Android、iOS、WP8 等系统的开关机。(此段装逼摘至网络😂)</p>

              <p>就单纯的为了折腾，所以创建了这个网站。不知道说些什么，先暂时这样吧……</p>
            </div>
          </TabPane>
        </Tabs>
      </main>

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
    </div>
  )
}
