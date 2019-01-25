import 'isomorphic-unfetch'
import { List, Tag } from 'antd'
import Router from 'next/router'
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
  static async getInitialProps({ query }) {
    const menus = Object.keys(menuMap)
    let index
    if (query && query.tab !== undefined) {
      index = query.tab
    } else {
      index = 0
    }
    // eslint-disable-next-line no-undef
    const resp = await fetch(`https://api.qingzhiyu.com/news/list?channel=${menus[index]}`)
    const json = await resp.json()
    return {
      index,
      menus,
      data: json.list,
    }
  }

  render() {
    const sitesMenu = (
      <div>
        {this.props.menus.map((item, index) => (
          <CheckableTag
            key={item}
            checked={this.props.index == index}
            onChange={() => Router.push(`/?tab=${index}`)}
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
            dataSource={this.props.data}
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
