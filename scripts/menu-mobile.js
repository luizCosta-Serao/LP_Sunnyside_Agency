export default function menuMobile() {
  const btnMobile = document.querySelector(".button-menu-mobile")
  function handleClick() {
    document.querySelector(".nav-menu ul")?.classList.toggle("active")
  }
  btnMobile?.addEventListener("click", handleClick)
}