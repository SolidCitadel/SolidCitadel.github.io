import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import { LeftSideItemType } from './LeftSideItem'
import LeftSideFolder from './LeftSideFolder'
import React from 'react'

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

  li {
    margin-left: 10px;
  }
  ul {
    list-style: none;
  }
`

export type LeftSideProps = {
  items: LeftSideItemType[]
}

const LeftSide: FunctionComponent<LeftSideProps> = function ({ items }) {
  return (
    <LeftSideWrapper>
      <LeftSideContainer>
        <LeftSideFolder name="" items={items} />
      </LeftSideContainer>
    </LeftSideWrapper>
  )
}

export default LeftSide
