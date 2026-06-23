'use client'
import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = el.dataset.delay || '0'
            setTimeout(() => {
              el.classList.add('revealed')
            }, parseInt(delay))
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )

    // Small initial delay so CSS is ready, then observe
    const timer = setTimeout(() => {
      targets.forEach((el) => observer.observe(el))
    }, 50)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])
}
