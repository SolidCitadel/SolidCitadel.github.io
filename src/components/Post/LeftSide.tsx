import styled from '@emotion/styled'
import { FunctionComponent } from 'react'

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  width: 200px;
`

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

type LeftSideType = {
  items: LeftSideItemType[]
}

const LeftSide: FunctionComponent<LeftSideType> = function ({ items }) {
  return (
    <Container>
      {items.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter: { title },
          },
        }: LeftSideItemType) => (
          <div>{id + slug && title}</div>
        ),
      )}
    </Container>
  )
}

export default LeftSide
