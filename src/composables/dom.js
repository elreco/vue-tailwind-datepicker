export default function useDom() {
  const useVisibleViewport = (el) => {
    if (el) {
      const { right } = el.getBoundingClientRect()
      const vWidth = window.innerWidth || document.documentElement.clientWidth
      console.log('right', right)
      console.log('vWidth', vWidth)
      return right > vWidth
    }
  }

  return {
    useVisibleViewport
  }
}
