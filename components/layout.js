import Head from 'next/head'
import { Layout } from 'antd'

const { Header, Content } = Layout

export default ({ children, title = '卿志宇的关注' }) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content='initial-scale=1.0, width=device-width' />
      <meta name="keywords" content="卿志宇,热点,新闻,资讯,关注" />
      <meta name="description" content="热点关注聚合：知乎、虎扑、豆瓣、NGA、V2EX、Github、SegmentFault、华尔街见闻" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <title>{ title }</title>
    </Head>
    <Header></Header>
    <Content>
      <div className="container">
        { children }
      </div>
    </Content>
    <style global jsx>{`
      body {
        margin: 0;
        padding: 0;
      }
      .ant-layout-header {
        position: fixed;
        top: 0;
        height: 52px;
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #e8e8e8;
      }
      .ant-layout-content {
        padding-top: 52px;
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
      .container {
        max-width: 960px;
        padding: 12px;
        margin: 0 auto;
      }
    `}</style>
  </div>
)
