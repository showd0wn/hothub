import 'isomorphic-unfetch'
import React from 'react'
import { Button } from 'antd'

import Layout from '../components/layout'

export default class Index extends React.Component {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const resp = await fetch('http://47.97.160.141:8000/news/listAll')
    const json = await resp.json()
    return json.data
  }

  render() {
    return (
      <Layout>
        <div>{ this.props.shh[1].title }</div>

        <Button size='small' type='primary'>OK</Button>
        <Button size='small' style={{ marginLeft: 8 }}>Cancel</Button>
      </Layout>
    )
  }
}
