function onActivation() {
  window.location.replace("http://access-error.netlify.app")
  console.log("No access!")
}
window.addEventListener('click', (event) => {
  onActivation() // Redirect them to the no access page.
})
