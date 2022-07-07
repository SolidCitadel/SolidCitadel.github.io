import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import { Link } from 'gatsby'

export type LeftSideItemType = {
  node: {
    id: string
    fields: {
      slug: string
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
    id,
    fields: { slug },
    frontmatter: { title },
  },
}) {
  if (id + slug) console.log(1)
  return <Container to={slug}>{title}</Container>
}

export default LeftSideItem
