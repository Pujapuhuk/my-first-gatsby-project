import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'



const AboutPage = ({ data }) => {
    return (
        <Layout pageTitle="About Me">
            <h1>{data.datoCmsArticle.title}</h1>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
    )
}

export const query = graphql`
  query {
    datoCmsArticle {
      title
      story
    }
  }
`
export default AboutPage