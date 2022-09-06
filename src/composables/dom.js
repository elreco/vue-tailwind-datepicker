export default function useDom() {
  const useVisibleViewport = (el) => {
    const { right, x, left } = el.getBoundingClientRect()
    const vWidth = window.innerWidth || document.documentElement.clientWidth
    return Math.abs(right) + Math.abs(x) + Math.abs(left) < vWidth
  }

  return {
    useVisibleViewport
  }
}
