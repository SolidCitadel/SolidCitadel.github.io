import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const HeaderWrapper = styled.header`
  display: flex;
  place-items: center;
  height: 60px;
  padding: 11px 24px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 300;
`

const Title = styled(Link)`
  font-size: 25px;
  font-weight: 600;
  color: #2c3e50;
  padding-bottom: 1px;
  cursor: pointer;
`

const NavigationWrapper = styled.div`
  margin-left: auto;
`

const Header: FunctionComponent = function () {
  return (
    <HeaderWrapper>
      <Title to={`/`}> SolidCitadel </Title>
      <NavigationWrapper> Nav </NavigationWrapper>
    </HeaderWrapper>
  )
}

export default Header
