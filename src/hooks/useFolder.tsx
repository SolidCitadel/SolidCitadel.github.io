import { graphql, useStaticQuery } from 'gatsby'
import { useRef, useState } from 'react'

type ArrowImageType = {
  publicURL: string
}

type ArrowImagesType = {
  downArrow: ArrowImageType
  rightArrow: ArrowImageType
}

const useFolder = () => {
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
  const [arrowImage, setArrowImage] = useState(downArrow)
  const [state, setState] = useState(true)
  const toggleFolder = () => {
    if (ulRef.current) {
      if (state) {
        ulRef.current.style.display = 'none'
        setArrowImage(rightArrow)
      } else {
        ulRef.current.style.display = 'block'
        setArrowImage(downArrow)
      }
      setState(!state)
    }
  }
  return { arrowImage, ulRef, toggleFolder }
}

export default useFolder
