const displayArea = document.querySelector('#display-area')
const clearButton = document.querySelector('#clear-button')
const evalButton = document.querySelector('#eval-button')

function clearContentArea () {
  displayArea.textContent = ''
}

function addToContentArea (event) {
  const target = event.target
  displayArea.textContent += target.textContent
}

function evalContentArea () {
  displayArea.textContent = eval(displayArea.textContent)
}

clearButton.addEventListener('click', clearContentArea)
evalButton.addEventListener('click', evalContentArea)

for (const element of document.querySelectorAll('.add-content-button')) {
  element.addEventListener('click', addToContentArea)
}
