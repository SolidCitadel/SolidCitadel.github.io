import styled from '@emotion/styled'
import { FunctionComponent } from 'react'

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

const Container = styled.div`
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
  return <Container>{title}</Container>
}

export default LeftSideItem
