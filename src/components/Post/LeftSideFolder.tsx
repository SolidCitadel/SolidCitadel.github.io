import { FunctionComponent } from 'react'
import { deepCopy } from 'deep-copy-ts'
import styled from '@emotion/styled'
import React from 'react'
import useFolder from 'hooks/useFolder'
import {
  LeftSideItemProps,
  LeftSideFolderProps,
} from 'types/LeftSideItem.types'

const FolderHead = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`

const Arrow = styled.img`
  width: 12px;
  margin-right: 5px;
`

const LeftSideFolder: FunctionComponent<LeftSideFolderProps> = function ({
  name,
  items,
  path,
}) {
  const folders: { [name: string]: LeftSideItemProps[] } = {}
  const posts: LeftSideItemProps[] = []
  items.forEach(item => {
    const nItem = deepCopy(item)
    const first = nItem.node.fields.directory.shift()
    if (first)
      folders[first] ? folders[first].push(nItem) : (folders[first] = [nItem])
    else posts.push(nItem)
  })

  let key = 0
  const { arrowImage, ulRef, toggleFolder } = useFolder(!!path)

  const isTargetFolder = (name: string) => {
    return path && path[0] === name ? path.slice(1, path.length) : undefined
  }
  const isTargetPost = (slug: string) => {
    const lastSlug = slug
      .slice(1, slug.length - 1)
      .split('/')
      .pop()
    return path && path.length === 1 && path[0] === lastSlug
      ? 'active'
      : undefined
  }

  return (
    <>
      {name && (
        <FolderHead onClick={toggleFolder}>
          <Arrow src={arrowImage} alt={'404'} />
          <span>{name}</span>
        </FolderHead>
      )}

      <ul ref={ulRef} className={path ? 'active' : undefined}>
        {Object.entries(folders).map(([name, items]) => (
          <li key={key++}>
            <LeftSideFolder
              name={name}
              items={items}
              path={isTargetFolder(name)}
            />
          </li>
        ))}

        {posts.map(
          ({
            node: {
              fields: { slug },
              frontmatter: { title },
            },
          }) => (
            <li key={key++}>
              <a href={slug} className={isTargetPost(slug)}>
                {title}
              </a>
            </li>
          ),
        )}
      </ul>
    </>
  )
}

export default LeftSideFolder
