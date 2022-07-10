import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const HeaderWrapper = styled.header`
  display: flex;
  place-items: center;
  height: 60px;
  padding: 24px 11px 24px 11px;
  position: sticky;
  top: -60px;
  width: 100%;
  background-color: white;
  z-index: 300;
  border-bottom: solid 1px #e2e2e2;
`

const Title = styled.a`
  font-size: 25px;
  font-weight: 600;
  color: #2c3e50;
  padding-bottom: 2px;
  cursor: pointer;
`

const NavigationWrapper = styled.div`
  margin-left: auto;
`

const Header: FunctionComponent = function () {
  return (
    <HeaderWrapper>
      <Title href={`/`}> SolidCitadel </Title>
      <NavigationWrapper> Nav </NavigationWrapper>
    </HeaderWrapper>
  )
}

export default Header
