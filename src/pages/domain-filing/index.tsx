import { MetaTitle } from '@/pages/domain-filing/components/title'
import { Carousel, Image, Tabs } from 'antd'
import { FilingFooter } from '@/pages/domain-filing/components/footer'
import styles from './index.less'

const { TabPane } = Tabs

export default function DomainFilingPage() {
  const images = [
    {
      sourceSrc: 'https://picgo.sh.lihaha.cloud/PicGo/20200504194905.jpg',
    },
    {
      sourceSrc: 'https://picgo.sh.lihaha.cloud/PicGo/20200418155344.gif',
    },
    {
      sourceSrc: 'https://picgo.sh.lihaha.cloud/PicGo/20200418151223.jpg',
    },
    {
      sourceSrc: 'https://picgo.sh.lihaha.cloud/PicGo/20200520203757.jpg',
    },
  ]

  return (
    <div className={styles.filingWrapper}>
      <MetaTitle />
      <Tabs>
        <TabPane tab='相册' key='1'>
          <Carousel autoplay dotPosition={'bottom'}>
            {images.map((item, idx) => {
              return <Image key={item.sourceSrc + idx} src={item.sourceSrc} />
            })}
          </Carousel>
        </TabPane>
        <TabPane tab='关于' key='2'>
          <div>
            <p>本人精通 HTML、CSS、JavaScript、PHP、ASP、C、C++、C#、Java、Python 等单词的拼写</p>

            <p>擅长 Ai、Fw、Fl、Br、Ae、Pr、Id、Ps 等软件的安装与卸载</p>

            <p>熟悉 Windows、Linux、OS X、Android、iOS、WP8 等系统的开关机。(此段装逼摘至网络😂)</p>

            <p>就单纯的为了折腾，所以创建了这个网站。不知道说些什么，先暂时这样吧…</p>
          </div>
        </TabPane>
      </Tabs>
      <FilingFooter />
    </div>
  )
}
