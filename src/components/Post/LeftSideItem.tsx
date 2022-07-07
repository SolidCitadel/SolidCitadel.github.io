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
  if (id) console.log(1)
  let arr = slug.substring(1, slug.length - 1).split('/')
  return (
    <Container to={slug}>
      {arr.slice(0, arr.length - 1).join('/') + '/' + title}
    </Container>
  )
}

export default LeftSideItem
