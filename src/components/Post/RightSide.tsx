import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const Container = styled.aside`
  width: 200px;
`

const RightSide: FunctionComponent = function () {
  return <Container>This is Right</Container>
}

export default RightSide
