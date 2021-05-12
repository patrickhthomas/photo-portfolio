import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Container from "../components/Container"
import styled from "@emotion/styled"
import Img from 'gatsby-image'



export default function heroImageLeft() {


  return (
    <StaticQuery
      query={graphql`
query MyQuery {
  __typename
  allContentfulAsset(filter: {file: {fileName: {eq: "heroImageLeft.png"}}}) {
    nodes {
      fluid {
        base64
        tracedSVG
        srcWebp
        srcSetWebp
      }
    }
  }
}

      `}
      render={data => (
        <Img fluid={data.nodes.[0].fluid} />
      )}
    />
  )
}