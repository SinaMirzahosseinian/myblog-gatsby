import React, { Component } from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default class About extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h1>this is about page</h1>
          <p>hello im sina and live in iran lol</p>
        </div>
      </Layout>
    )
  }
}
