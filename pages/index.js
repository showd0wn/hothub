import 'isomorphic-unfetch'
import { List, Tag } from 'antd'
import React from 'react'
import Layout from '../components/layout'

const CheckableTag = Tag.CheckableTag
const menuMap = {
  shh: '湿乎乎',
  bxj: '步行街',
  nga: 'NGA',
  v2ex: 'V2ex',
  zhihu: '知乎',
  douban: '豆瓣',
  github: 'GitHub',
  segmentfault: 'SegmentFault',
  wallstreetcn: '华尔街见闻',
}
export default class Index extends React.Component {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const resp = await fetch('http://47.97.160.141:8000/news/listAll')
    const json = await resp.json()
    return json.data
  }

  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      menus: Object.keys(props).filter(item => item !== 'url'),
    }
  }

  render() {
    const sitesMenu = (
      <div>
        {this.state.menus.map((item, index) => (
          <CheckableTag
            key={item}
            checked={this.state.index == index}
            onChange={() => this.setState({ index })}
          >
            {menuMap[item]}
          </CheckableTag>
        ))}
      </div>
    )

    return (
      <Layout>
        <List
          header={sitesMenu}
          style={{ backgroundColor: '#fff' }}
          bordered
          dataSource={this.props[this.state.menus[this.state.index]]}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <div>
                    <span>{`${index + 1}.`}&nbsp;</span>
                    <a target="_blank" href={item.url} style={{ fontWeight: 400 }}>{item.title}</a>
                  </div>
                }
                description={item.summary}
              />
            </List.Item>
          )}
        />
        <style jsx>{`
          a:link, a:visited { color: #0a0a0a; }
          a:hover, a:active { color: gray!important; }
        `}</style>
      </Layout>
    )
  }
}
