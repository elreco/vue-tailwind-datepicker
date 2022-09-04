export default function useDom() {
  const useDirective = (binding, isShow) => {
    
    const { instance, arg, value } = binding
    document.body.addEventListener('click', ($event) => {
      if ($event.target.classList.contains('vtd-datepicker-overlay')) {
        return (isShow.value = false)
      } else {
        if (instance.VueTailwindDatepickerRef) {
          const { autoApply, previous, next } = instance
          const target = $event.target.classList.contains('vtd-datepicker-date')
          if (target && autoApply && !previous && !next) {
            console.log("hjere")
            return (isShow.value = false)
          }
          console.log(arg)
          if (!autoApply && $event.target.classList.contains(`${arg}-apply-picker`) && instance.value !== '') {
            console.log("hjere 2")

            return (isShow.value = false)
          }
          if ($event.target.classList.contains(`${arg}-cancel-picker`)) {
            console.log("hjere 3")

            return (isShow.value = false)
          }
          if ($event.target.classList.contains(`vtd-shortcuts`) && autoApply) {
            console.log("hjere 4")

            return (isShow.value = false)
          }
          console.log("hjere 5")
          return (isShow.value =
            instance.VueTailwindDatepickerRef.contains($event.target) ||
            document.getElementById(value) === $event.target ||
            value === $event.target)
        }
        console.log("hjere 6")
        return isShow.value = true
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
