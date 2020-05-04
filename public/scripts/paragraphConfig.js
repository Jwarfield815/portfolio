/* eslint-disable no-unused-vars */
function displayInfo(fileName) {
  fetch(`/projects/${fileName}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('description').innerHTML = data.description;
      document.getElementById('techniques').innerHTML = data.techniques;
      document.getElementById('code').innerHTML = data.code;
    });
}
