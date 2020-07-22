import Head from 'next/head'
import { Layout } from 'antd'

const { Content } = Layout

export default ({ children, title = '卿志宇的关注' }) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content='initial-scale=1.0, width=device-width' />
      <meta name="keywords" content="热点,关注,资讯,聚合,卿志宇" />
      <meta name="description" content="聚合知乎、虎扑、豆瓣、NGA、V2EX、Github、SegmentFault等热点资讯" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <title>{ title }</title>
    </Head>
    <Content>{ children }</Content>
    <style global jsx>{`
      body { margin: 0; padding: 0; }
      a:link, a:visited { color: #0a0a0a; }
      a:hover, a:active { color: gray!important; }
      .ant-layout-content {
        min-height: 100vh;
        background: #f5f5f5;
      }
      .ant-list-item-meta-description {
        overflow: hidden;
        white-space: normal;
        word-wrap: break-word;
        word-break: break-all;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .ant-list-header {
        white-space: nowrap;
        overflow: auto;
      }
    `}</style>
  </div>
)
