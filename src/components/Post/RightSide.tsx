import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const RightSideWrapper = styled.aside`
  width: 300px;
  border-left: solid 1px #e2e2e2;

  @media (max-width: 1368px) {
    display: none;
  }
`

const HtmlRenderer = styled.div`
  position: sticky;
  top: 80px;
  margin-bottom: auto;
  li {
    margin: 10px 0;
  }
  ul {
    list-style: none;
    margin-left: 5px;
    padding-left: 10px;
    border-left: solid 2px grey;
  }
  & > ul {
    border-left: none;
    margin-left: 0;
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
