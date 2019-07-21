let article1 = document.getElementById("article1")
let article2 = document.getElementById("article2")
let inputElement = document.querySelector("input")

const updateTextContent = (event) => {
  article1.textContent = inputElement.value
  article2.textContent = inputElement.value
}

inputElement.addEventListener("keyup", updateTextContent)