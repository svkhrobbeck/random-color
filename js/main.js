const elBody = document.querySelector("body")
const elToggler = document.querySelector("[data-toggler-button]")
const elCopyBtn = document.querySelector("[data-copy-button]")
const elModal = document.querySelector("[data-modal]")

const values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]


// random gradient color
function getGradient() {
  let color = "#"

  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.trunc(Math.random() * values.length)
    color += values[randomNumber]
  }

  return color
}


// set gradient color to body
function setGradient() {
  const firstColor = getGradient()
  const secondColor = getGradient()
  const randomDeg = Math.trunc(Math.random() * 360)
  const bgColor = `linear-gradient(${randomDeg}deg, ${firstColor}, ${secondColor})`

  return bgColor
}



elToggler.addEventListener("click", () => {
  elBody.style.background = setGradient()
})


elCopyBtn.addEventListener("click", () => {
  elModal.classList.add("show")
  let color = `background: ${setGradient()};`
  console.log(color);
  navigator.clipboard.writeText(color);

  setTimeout(() => {
    elModal.classList.remove("show")
  }, 1000);
})