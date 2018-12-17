import Head from 'next/head'

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
    { children }
  </div>
)
