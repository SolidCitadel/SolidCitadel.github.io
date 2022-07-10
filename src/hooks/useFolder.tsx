import { graphql, useStaticQuery } from 'gatsby'
import { useEffect, useRef, useState } from 'react'

type ArrowImageType = {
  publicURL: string
}

type ArrowImagesType = {
  downArrow: ArrowImageType
  rightArrow: ArrowImageType
}

const useFolder = (open: boolean) => {
  const {
    downArrow: { publicURL: downArrow },
    rightArrow: { publicURL: rightArrow },
  }: ArrowImagesType = useStaticQuery(graphql`
    query {
      rightArrow: file(name: { eq: "right-arrow" }) {
        publicURL
      }
      downArrow: file(name: { eq: "down-arrow" }) {
        publicURL
      }
    }
  `)
  const ulRef = useRef<HTMLUListElement>(null)
  const [arrowImage, setArrowImage] = useState(open ? downArrow : rightArrow)
  const [state, setState] = useState(open)
  const toggleFolder = () => {
    setState(!state)
  }

  useEffect(() => {
    if (ulRef.current)
      if (state) {
        ulRef.current.style.display = 'block'
        setArrowImage(downArrow)
      } else {
        ulRef.current.style.display = 'none'
        setArrowImage(rightArrow)
      }
  }, [ulRef.current, state])

  return { arrowImage, ulRef, toggleFolder }
}

export default useFolder
