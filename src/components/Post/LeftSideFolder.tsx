import { FunctionComponent } from 'react'
import LeftSideItem, { LeftSideItemType } from './LeftSideItem'
import { LeftSideProps } from './LeftSide'
import { deepCopy } from 'deep-copy-ts'
import styled from '@emotion/styled'
import React from 'react'
import useFolder from 'hooks/useFolder'

type LeftSideFolderProps = {
  name: string
} & LeftSideProps

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
  const { arrowImage, ulRef, toggleFolder } = useFolder()

  return (
    <>
      {name && (
        <FolderHead onClick={toggleFolder}>
          <Arrow src={arrowImage} alt={'404'} />
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
