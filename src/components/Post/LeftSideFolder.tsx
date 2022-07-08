import { FunctionComponent, useRef, useState } from 'react'
import LeftSideItem, { LeftSideItemType } from './LeftSideItem'
import { LeftSideProps } from './LeftSide'
import { deepCopy } from 'deep-copy-ts'
import styled from '@emotion/styled'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

type LeftSideFolderProps = {
  name: string
} & LeftSideProps

const FolderHead = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  span {
    font-size: 16px;
  }
  display: flex;
  align-items: center;
`

const Arrow = styled(GatsbyImage)`
  width: 14px;
  margin-right: 3px;
`

const LeftSideFolder: FunctionComponent<LeftSideFolderProps> = function ({
  name,
  items,
}) {
  const folders: { [name: string]: LeftSideItemType[] } = {}
  const posts: LeftSideItemType[] = []
  items.forEach(item => {
    const nItem = deepCopy(item)
    const first = nItem.node.fields.directory.shift()
    if (first)
      folders[first] ? folders[first].push(nItem) : (folders[first] = [nItem])
    else posts.push(nItem)
  })

  let key = 0
  const ulRef = useRef<HTMLUListElement>(null)
  const [state, setState] = useState(true)
  const toggleFolder = () => {
    if (ulRef.current) {
      if (state) ulRef.current.style.display = 'none'
      else ulRef.current.style.display = 'block'
      setState(!state)
    }
  }

  const {
    downArrow: {
      childImageSharp: { gatsbyImageData: downArrow },
    },
    rightArrow: {
      childImageSharp: { gatsbyImageData: rightArrow },
    },
  } = useStaticQuery(graphql`
    query {
      rightArrow: file(name: { eq: "right-arrow" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      downArrow: file(name: { eq: "down-arrow" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  return (
    <>
      {name && (
        <FolderHead onClick={toggleFolder}>
          <Arrow image={state ? downArrow : rightArrow} alt={'404'} />
          <span>{name}</span>
        </FolderHead>
      )}
      <ul ref={ulRef}>
        {Object.entries(folders).map(([name, items]) => (
          <li key={key++}>
            <LeftSideFolder name={name} items={items} />
          </li>
        ))}
        {posts.map(({ node }: LeftSideItemType) => (
          <li key={key++}>
            <LeftSideItem node={node} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default LeftSideFolder
