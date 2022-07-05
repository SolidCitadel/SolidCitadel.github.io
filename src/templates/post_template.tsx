import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { PostFrontmatterType } from 'types/PostItem.types' // 바로 아래에서 정의할 것입니다
import Template from 'components/Common/Template'
import PostHead, { PostHeadProps } from 'components/Post/PostHead'
import PostContent from 'components/Post/PostContent'
import CommentWidget from 'components/Post/CommentWidget'

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[] // 존재하지 않는 타입이므로 에러가 발생하지만 일단 작성해주세요
    }
  }
}

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const {
    node: { html, frontmatter },
  } = edges[0]
  const postHeadProps: PostHeadProps = {
    title: frontmatter.title,
    date: frontmatter.date,
    categories: frontmatter.categories,
    thumbnail: frontmatter.thumbnail.childImageSharp.gatsbyImageData,
  }

  return (
    <Template>
      <PostHead {...postHeadProps} />
      <PostContent html={html} />
      <CommentWidget />
    </Template>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`

export type PostPageItemType = {
  node: {
    html: string
    frontmatter: PostFrontmatterType
  }
}
