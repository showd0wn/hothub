import 'isomorphic-unfetch'
import { List, Tag } from 'antd'
import React, { Component } from 'react'
import Layout from '../components/layout'

const CheckableTag = Tag.CheckableTag
const menuMap = {
  bxj: '步行街',
  shh: '湿乎乎',
  soccer: '绿茵场',
  zhihu: '知乎',
  douban: '豆瓣',
  nga: 'NGA',
  v2ex: 'V2ex',
  github: 'GitHub',
  segmentfault: 'SegmentFault',
}
export default class Index extends Component {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const resp = await fetch('//api.qingzhiyu.com/news/listAll')
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
        <div className="list-container">
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
          >
          </List>
        </div>
        <style jsx>{`
          .list-container {
            padding: 12px;
            margin: 0 auto;
          }
          @media (min-width: 768px) {
            .list-container { max-width: 67vw; }
          }
        `}</style>
      </Layout>
    )
  }
}
