import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import LeftSideItem, { LeftSideItemType } from './LeftSideItem'

const LeftSideWrapper = styled.aside`
  width: 250px;
  border-right: solid 1px #e2e2e2;

  @media (max-width: 1368px) {
    display: none;
  }
`

const LeftSideContainer = styled.div`
  position: sticky;
  top: 80px;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
`

type LeftSideType = {
  items: LeftSideItemType[]
}

const LeftSide: FunctionComponent<LeftSideType> = function ({ items }) {
  items.forEach(
    ({
      node: {
        fields: { slug },
      },
    }) => {
      let arr = slug.split('/')
      arr = arr.slice(0, arr.length - 1)
    },
  )
  return (
    <LeftSideWrapper>
      <LeftSideContainer>
        {items.map(({ node }: LeftSideItemType) => (
          <LeftSideItem node={node} />
        ))}
      </LeftSideContainer>
    </LeftSideWrapper>
  )
}

export default LeftSide
