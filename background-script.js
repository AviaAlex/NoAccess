function onActivation() {
  window.location.replace("about:blank");
  const newdiv = document.createElement("div");
  const divcontent = document.createTextNode("Sorry, access denied.");
  newdiv.appendChild(divcontent);
}
window.addEventListener('click', (event) => {
  onActivation(); // Redirect them to the no access page.
})
