import styled from '@emotion/styled'
import { FunctionComponent } from 'react'

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

const Container = styled.a`
  cursor: pointer;
`

const LeftSideItem: FunctionComponent<LeftSideItemType> = function ({
  node: {
    fields: { slug },
    frontmatter: { title },
  },
}) {
  return <Container href={slug}>{title}</Container>
}

export default LeftSideItem
