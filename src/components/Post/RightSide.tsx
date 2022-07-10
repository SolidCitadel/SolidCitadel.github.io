import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import useTOC from 'hooks/useTOC'

type RightSideProps = {
  html: string
}

const Wrapper = styled.div`
  width: 300px;
  border-left: solid 1px #e2e2e2;

  @media (max-width: 1368px) {
    display: none;
  }
`

const HtmlRenderer = styled.nav`
  font-size: 18px;
  margin-right: 10px;

  li {
    margin: 7px 0 7px 10px;
  }

  a {
    display: block;
    border-radius: 5px;
    padding: 3px 5px 3px 5px;
    transition: all 0.25s ease 0s;

    :hover {
      background-color: #e2e2e2;
    }
  }

  a.active {
    background-color: #b4b4b4;
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

const RightSide: FunctionComponent<RightSideProps> = function ({ html }) {
  const { tocRef } = useTOC()
  return (
    <Wrapper>
      <HtmlRenderer ref={tocRef} dangerouslySetInnerHTML={{ __html: html }} />
    </Wrapper>
  )
}

export default RightSide
