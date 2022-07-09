import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Footer from 'components/Common/Footer'
import Header from './Header'
import HtmlHead from 'components/Common/HtmlHead'

type TemplateProps = {
  children: ReactNode
  title: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Contents = styled.div``

const Template: FunctionComponent<TemplateProps> = function ({
  children,
  title,
}) {
  return (
    <Container>
      <HtmlHead title={title} />
      <GlobalStyle />
      <Header />
      <Contents>{children}</Contents>
      <Footer />
    </Container>
  )
}

export default Template
