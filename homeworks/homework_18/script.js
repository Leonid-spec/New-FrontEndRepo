//HW_18
const img = document.querySelector("#rick-img");
const btnUpdate = document.querySelector("#btn-update");
const statusEl = document.querySelector("#rick-status");
const nameEl = document.querySelector("#rick-name");
const originEl = document.querySelector("#rick-origin");

function getRick() {
  fetch("https://rickandmortyapi.com/api/character/1")
    .then((res) => res.json())
    .then((data) => {
      img.src = data.image;
      nameEl.textContent = `Name: ${data.name}`;
      statusEl.textContent = `Status: ${data.status}`;
      originEl.textContent = `Origin: ${data.origin.name}`;
    })
    .catch((err) => console.error("Error fetching data:", err));
}
getRick();
