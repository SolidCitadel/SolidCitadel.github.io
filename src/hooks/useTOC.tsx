import { useEffect, useRef } from 'react'

const useTOC = function () {
  const tocRef = useRef<HTMLElement>(null)
  let n: HTMLAnchorElement | null

  const observe = (entries: IntersectionObserverEntry[]) => {
    const entry = entries.find(entry => entry.isIntersecting)
    if (!entry || !tocRef.current) return

    const target = entry.target as HTMLAnchorElement
    const a = tocRef.current.querySelector(
      `a[href="${target.hash}"]`,
    ) as HTMLAnchorElement
    if (n) n.className = ''
    a.className = 'active'
    n = a
  }

  useEffect(() => {
    const observer = new IntersectionObserver(observe, {
      rootMargin: '10% 0% -80%',
    })
    const content = document.querySelector('article')
    if (content)
      content
        .querySelectorAll('h3 > a, h2 > a')
        .forEach(a => observer.observe(a))

    return () => observer.disconnect()
  }, [])

  return { tocRef }
}

export default useTOC
