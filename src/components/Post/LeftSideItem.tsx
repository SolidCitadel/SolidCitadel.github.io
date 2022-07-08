import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import { Link } from 'gatsby'

export type LeftSideItemType = {
  node: {
    fields: {
      slug: string
      directory: string[]
    }
    frontmatter: {
      title: string
    }
  }
}

const Container = styled(Link)`
  padding: 3px;
  margin: 5px;
  cursor: pointer;
`

const LeftSideItem: FunctionComponent<LeftSideItemType> = function ({
  node: {
    fields: { slug },
    frontmatter: { title },
  },
}) {
  return <Container to={slug}>{title}</Container>
}

export default LeftSideItem
