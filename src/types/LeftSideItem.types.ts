export type LeftSideItemProps = {
  node: {
    fields: {
      slug: string
      directory: string[]
    }
    frontmatter: {
      title: string
    }
  }
}

export type LeftSideProps = {
  items: LeftSideItemProps[]
  pathname: string
}

export type LeftSideFolderProps = {
  items: LeftSideItemProps[]
  name: string
  path?: string[]
}
