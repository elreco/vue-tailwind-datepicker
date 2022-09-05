export default function useDom() {
  const useDirective = (binding, isShow) => {
    const { instance, arg, value } = binding
    document.body.addEventListener('click', ($event) => {
      if ($event.target.classList.contains('vtd-datepicker-overlay')) {
        return (isShow.value = false)
      } else {
        if (instance.LitepieDatepickerRef) {
          const { autoApply } = instance

          if (!autoApply && $event.target.classList.contains(`${arg}-apply-picker`) && instance.value !== '') {
            return (isShow.value = false)
          }
          if ($event.target.classList.contains(`${arg}-cancel-picker`)) {
            return (isShow.value = false)
          }
          if ($event.target.classList.contains(`vtd-shortcuts`) && autoApply) {
            return (isShow.value = false)
          }

          return (isShow.value =
            instance.LitepieDatepickerRef.contains($event.target) ||
            document.getElementById(value) === $event.target ||
            value === $event.target)
        }

        return (isShow.value = true)
      }
    })
  }

  const useVisibleViewport = (el) => {
    const { right } = el.getBoundingClientRect()
    const vWidth = window.innerWidth || document.documentElement.clientWidth

    return right < vWidth
  }

  return {
    useDirective,
    useVisibleViewport
  }
}
