export default function slideTestimonials() {
  const changeSlide = document.querySelectorAll(".change-slide span")
  changeSlide.forEach((slide, index) => {

    const slideWrapper = document.getElementById("clients")
    const slideItem = document.querySelectorAll(".clients li")

    function changeSlide() {
      slideWrapper.style.transition = "transform .5s"
      if(slideItem[index] !== 0 ) {
        slideWrapper.style.transform = `translateX(-${(slideItem[index].clientWidth + 30) * index}px)`
      } else {
        slideWrapper.style.transform = `translateX(-${slideItem[index].clientWidth * index}px)`
      }  
    }
    slide.addEventListener("click", changeSlide)


    function reloadSlide() {
      changeSlide()
    }
    window.addEventListener("resize", reloadSlide)
  })
}