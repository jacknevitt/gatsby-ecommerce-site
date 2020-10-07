import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Box, NavLink } from 'theme-ui'
import ShoppingCartIcon from './shopping-cart-icon'

const Header = ({ siteTitle }) => (
  <Box
    as="header"
    sx={{
      backgroundColor: `primary`,
      marginBottom: `1.45rem`
    }}
  >
    <nav
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'space-evenly'
      }}
    >
      <NavLink as={Link} to="/">
        Home
      </NavLink>
      <NavLink as={Link} to="/products">
        Products
      </NavLink>
      <ShoppingCartIcon />
    </nav>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
