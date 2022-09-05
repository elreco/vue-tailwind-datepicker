export default function useDom() {
  const useVisibleViewport = (el) => {
    const { right } = el.getBoundingClientRect()
    const vWidth = window.innerWidth || document.documentElement.clientWidth
    return right < vWidth
  }

  return {
    useVisibleViewport
  }
}
