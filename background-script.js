function onActivation() {
  window.location.replace("about:blank")
  const newdiv = document.createElement("div")
  const newtext = "Sorry, access denied."
  const newtextappended = document.createTextNode(newtext)
  newdiv.appendChild(newtextappended)
}
window.addEventListener('click', (event) => {
  onActivation() // Redirect them to the no access page.
})
