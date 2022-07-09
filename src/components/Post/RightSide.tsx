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
  font-size: 18px;
  margin-right: 10px;
  li {
    margin: 7px 0 7px 10px;
  }
  a {
    display: block;
    border-radius: 5px;
    padding: 3px 0 3px 5px;
    :hover {
      background-color: #e2e2e2;
    }
  }
  ul {
    list-style: none;
    margin-left: 15px;
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
