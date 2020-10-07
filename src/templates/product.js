import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Product from '../components/product'

export const query = graphql`
  query($slug: String!) {
    product(slug: { eq: $slug }) {
      currency
      description
      id
      name
      price
      sku
      slug
      image
    }
  }
`

const ProductTemplate = ({ data }) => {
  return (
    <Layout>
      <Product product={data.product}></Product>
    </Layout>
  )
}

export default ProductTemplate
