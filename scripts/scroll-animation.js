export default function animationScroll() {
  const elements = document.querySelectorAll(".js-scroll")
  elements[0].classList.add("animation-scroll-left")
  elements[1].classList.add("animation-scroll-left")

  function scrollAnimation() {
    elements.forEach(element => {
      const windowMetade = window.innerHeight * 0.7
      const bounding = element.getBoundingClientRect().top - windowMetade
      if(bounding < 0) {
        element.classList.add("animation-scroll-left")
      } 
    })
  }

  window.addEventListener("scroll", scrollAnimation)
}