import { FunctionComponent } from 'react'
import LeftSideItem, { LeftSideItemType } from './LeftSideItem'
import { LeftSideProps } from './LeftSide'
import { deepCopy } from 'deep-copy-ts'
import styled from '@emotion/styled'

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

  return (
    <ul>
      {name && (
        <FolderHead>
          <span>- </span>
          <span>{name}</span>
        </FolderHead>
      )}
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
  )
}

export default LeftSideFolder
