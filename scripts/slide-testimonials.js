export default function slideTestimonials() {
  const slideWrapper = document.getElementById("clients")
  const slideItem = document.querySelectorAll(".clients li")
  const mediaMobile = window.matchMedia("(max-width:768px)")
  if(mediaMobile.matches === true) {
    const changeSlide = document.querySelectorAll(".change-slide span")
    changeSlide.forEach((slide, index) => {

      function changeSlide() {
        slideWrapper.style.transition = "transform .5s"
        if(slideItem[index] !== 0 ) {
          slideWrapper.style.transform = `translateX(-${(slideItem[index].clientWidth + 30) * index}px)`
        } else {
          slideWrapper.style.transform = `translateX(-${slideItem[index].clientWidth * index}px)`
        }  
      }
      slide.addEventListener("click", changeSlide)
    })
  }

function reloadSlide() {
  slideWrapper.style.transform = `translateX(-${slideItem[0].clientWidth * 0}px)`
  console.log(slideItem[0])
  console.log("OI")
}
window.addEventListener("resize", reloadSlide)
}