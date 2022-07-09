import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { PostFrontmatterType } from 'types/PostItem.types'
import Template from 'components/Common/Template'
import PostHead, { PostHeadProps } from 'components/Post/PostHead'
import PostContent from 'components/Post/PostContent'
import CommentWidget from 'components/Post/CommentWidget'
import styled from '@emotion/styled'
import RightSide from 'components/Post/RightSide'
import LeftSide from 'components/Post/LeftSide'
import { LeftSideItemType } from 'components/Post/LeftSideItem'

export type PostPageItemType = {
  node: {
    html: string
    frontmatter: PostFrontmatterType
    tableOfContents: string
  }
}

type PostTemplateProps = {
  data: {
    slugMarkdownRemark: {
      edges: PostPageItemType[]
    }
    allMarkdownRemark: {
      edges: LeftSideItemType[]
    }
  }
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1368px) {
    justify-content: center;
  }
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
    node: { html, frontmatter, tableOfContents },
  } = sedges[0]
  const postHeadProps: PostHeadProps = {
    title: frontmatter.title,
    date: frontmatter.date,
    categories: frontmatter.categories,
    thumbnail: frontmatter.thumbnail.childImageSharp.gatsbyImageData,
  }

  return (
    <Template title={frontmatter.title}>
      <Container>
        <LeftSide items={edges} />
        <Center>
          <PostHead {...postHeadProps} />
          <PostContent html={html} />
          <CommentWidget />
        </Center>
        <RightSide html={tableOfContents} />
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
          tableOfContents
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
            directory
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
