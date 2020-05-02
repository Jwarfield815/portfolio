/* eslint-disable no-unused-vars */
function displayInfo(fileName) {
  fetch(`/projects/${fileName}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementsByClassName('description')[0].innerHTML = data.description;
      document.getElementsByClassName('techniques')[0].innerHTML = data.techniques;
      document.getElementsByClassName('code')[0].innerHTML = data.code;
    });
}
