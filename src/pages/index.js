import React from 'react'

import Layout from '../components/layout'

const IndexPage = ({data}) => (
  <Layout> 
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p1>{data.site.siteMetadata.title}</p1>
    <br />
    <p1>{data.site.siteMetadata.desc}</p1>
  </Layout>
)

export default IndexPage


export const query = graphql`
query SiteMeta {
  site {
    siteMetadata {
      title
      desc
    }
  }
}
`
