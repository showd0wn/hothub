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
    <Header><img src="/static/logo.png" alt="潘多拉" /></Header>
    <Content>{ children }</Content>
    <style global jsx>{`
      body { margin: 0; padding: 0; }
      a:link, a:visited { color: #0a0a0a; }
      a:hover, a:active { color: gray!important; }
      .ant-layout-header {
        position: fixed;
        top: 0;
        height: 52px;
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #e8e8e8;
        z-index: 10;
        padding: 0;
      }
      .ant-layout-header img {
        height: 52px;
        padding-left: 4%;
        vertical-align: baseline;
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
      .ant-list-header {
        white-space: nowrap;
        overflow: auto;
      }
      @media (min-width: 768px) {
        .ant-layout-header img { padding-left: 16%; }
      }
    `}</style>
  </div>
)
