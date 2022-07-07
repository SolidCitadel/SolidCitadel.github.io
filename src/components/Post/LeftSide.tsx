import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import LeftSideItem, { LeftSideItemType } from './LeftSideItem'

const LeftSideWrapper = styled.aside`
  width: 250px;
  border-right: solid 1px #e2e2e2;
`

const LeftSideContainer = styled.div`
  position: sticky;
  top: 65px;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
`

type LeftSideType = {
  items: LeftSideItemType[]
}

const LeftSide: FunctionComponent<LeftSideType> = function ({ items }) {
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
