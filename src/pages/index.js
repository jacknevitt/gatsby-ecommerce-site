import React from 'react'
import {
  Heading,
  Container,
  Text,
  Grid,
  Card,
  Box,
  Image,
  Button,
  useColorMode
} from 'theme-ui'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Layout>
      <SEO title="Home" />
      <Button
        onClick={() => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}
      >
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </Button>
      <Container>
        <Heading as="h1">Very Good Fruit Store</Heading>
        <Grid columns={[1, 2, 3]} gap={20}>
          <Card>
            <Heading>Fresh</Heading>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi id, quam quis beatae porro quia magnam dicta iste
              veritatis, molestias sed ratione, possimus tempore accusantium
              quas? Atque quisquam aliquam dolore.
            </Text>
          </Card>
          <Card>
            <Heading>Tasty</Heading>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi id, quam quis beatae porro quia magnam dicta iste
              veritatis, molestias sed ratione, possimus tempore accusantium
              quas? Atque quisquam aliquam dolore.
            </Text>
          </Card>
          <Card>
            <Heading>Fresh</Heading>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi id, quam quis beatae porro quia magnam dicta iste
              veritatis, molestias sed ratione, possimus tempore accusantium
              quas? Atque quisquam aliquam dolore.
            </Text>
          </Card>
        </Grid>
        <Grid columns={[1, 2]}>
          <Box>
            <Heading>This Store is Great</Heading>
            <Text variant="text.caps">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem suscipit et illum ducimus voluptas, dicta odio fuga.
              Nam illo amet harum asperiores eligendi quas est, neque commodi
              molestias iure odit.
            </Text>
          </Box>
          <Box>
            <Image src="https://www.fillmurray.com/400/300"></Image>
          </Box>
        </Grid>
      </Container>
    </Layout>
  )
}

export default IndexPage
