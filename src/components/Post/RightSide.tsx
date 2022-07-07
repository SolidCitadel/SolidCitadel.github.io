import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const RightSideWrapper = styled.aside`
  width: 250px;
  border-left: solid 1px #e2e2e2;
`

const HtmlRenderer = styled.div`
  position: sticky;
  top: 65px;
  margin-bottom: auto;
  li {
    margin: 5px;
  }
  ul {
    list-style: none;
  }
`

type RightSideProps = {
  html: string
}

const RightSide: FunctionComponent<RightSideProps> = function ({ html }) {
  return (
    <RightSideWrapper>
      <HtmlRenderer dangerouslySetInnerHTML={{ __html: html }} />
    </RightSideWrapper>
  )
}

export default RightSide
