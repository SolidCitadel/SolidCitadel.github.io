import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import { LeftSideProps } from 'types/LeftSideItem.types'
import LeftSideFolder from './LeftSideFolder'
import React from 'react'

const LeftSideWrapper = styled.div`
  width: 250px;
  border-right: solid 1px #e2e2e2;

  @media (max-width: 1368px) {
    display: none;
  }
`

const LeftSideContainer = styled.nav`
  font-size: 18px;
  margin-right: 10px;

  li {
    margin-left: 20px;
  }

  ul {
    list-style: none;
  }

  & > ul > li {
    margin-left: 15px;
  }

  span {
    font-size: 18px;
    font-weight: bold;
  }

  a {
    display: block;
    line-height: 30px;
    transition: all 0.25s ease 0s;
    border-radius: 5px;
  }
  a.active {
    background-color: #f1f1f1;
  }
  a:hover {
    background-color: #cfcece;
  }

  button {
    height: 30px;
  }
`

const LeftSide: FunctionComponent<LeftSideProps> = function ({
  items,
  pathname,
}) {
  const path = pathname.substring(1, pathname.length - 1).split('/')
  console.log(path)
  return (
    <LeftSideWrapper>
      <LeftSideContainer>
        <LeftSideFolder name="" items={items} path={path} />
      </LeftSideContainer>
    </LeftSideWrapper>
  )
}

export default LeftSide
