import React from 'react'
import { Box, Button, Grid, Image } from 'theme-ui'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

const Product = ({ product }) => {
  const { addItem } = useShoppingCart()
  return (
    <Box sx={{ maxWidth: '768px', margin: '0 auto' }}>
      <Grid sx={{ color: 'primary' }} columns={[1, 2]}>
        <Box>
          <Image src={product.image} alt={product.name} />
        </Box>
        <Box as="section" sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box as="p">{product.description}</Box>
          <Box>
            {formatCurrencyString({
              currency: product.currency,
              value: product.price
            })}
          </Box>
          <Button
            onClick={() => addItem(product)}
            sx={{ backgroundColor: 'primary' }}
          >
            Add Item
          </Button>
        </Box>
      </Grid>
    </Box>
  )
}

export default Product
