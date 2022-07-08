import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { useRef, useState } from 'react'

type ArrowImageType = {
  childImageSharp: { gatsbyImageData: IGatsbyImageData }
}

type ArrowImagesType = {
  downArrow: ArrowImageType
  rightArrow: ArrowImageType
}

export const useFolder = () => {
  const {
    downArrow: {
      childImageSharp: { gatsbyImageData: downArrow },
    },
    rightArrow: {
      childImageSharp: { gatsbyImageData: rightArrow },
    },
  }: ArrowImagesType = useStaticQuery(graphql`
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
