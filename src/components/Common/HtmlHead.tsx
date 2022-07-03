import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet'

const HtmlHead: FunctionComponent<{ title?: string }> = function ({
  title = 'SolidCitadel',
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <link
        rel="shortcut icon"
        href="https://avatars.githubusercontent.com/SolidCitadel"
      />
    </Helmet>
  )
}

export default HtmlHead
