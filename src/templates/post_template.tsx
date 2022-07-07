import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { PostFrontmatterType } from 'types/PostItem.types' // 바로 아래에서 정의할 것입니다
import Template from 'components/Common/Template'
import PostHead, { PostHeadProps } from 'components/Post/PostHead'
import PostContent from 'components/Post/PostContent'
import CommentWidget from 'components/Post/CommentWidget'
import styled from '@emotion/styled'
import RightSide from 'components/Post/RightSide'
import LeftSide, { LeftSideItemType } from 'components/Post/LeftSide'

type PostTemplateProps = {
  data: {
    slugMarkdownRemark: {
      edges: PostPageItemType[] // 존재하지 않는 타입이므로 에러가 발생하지만 일단 작성해주세요
    }
    allMarkdownRemark: {
      edges: LeftSideItemType[]
    }
  }
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const Center = styled.div`
  display: flex;
  flex-direction: column;
`

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    slugMarkdownRemark: { edges: sedges },
    allMarkdownRemark: { edges },
  },
}) {
  const {
    node: { html, frontmatter },
  } = sedges[0]
  const postHeadProps: PostHeadProps = {
    title: frontmatter.title,
    date: frontmatter.date,
    categories: frontmatter.categories,
    thumbnail: frontmatter.thumbnail.childImageSharp.gatsbyImageData,
  }

  return (
    <Template>
      <Container>
        <LeftSide items={edges} />
        <Center>
          <PostHead {...postHeadProps} />
          <PostContent html={html} />
          <CommentWidget />
        </Center>
        <RightSide />
      </Container>
    </Template>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    slugMarkdownRemark: allMarkdownRemark(
      filter: { fields: { slug: { eq: $slug } } }
    ) {
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
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
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
