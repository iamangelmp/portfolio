document.addEventListener("DOMContentLoaded", main);
const cards = document.querySelector("#cards");

function main() {
  getData();
}

function getData() {
  const url = "http://localhost:3001/v1/getRepositories";
  fetch(url)
    .then((res) => res.json())
    .then((res) => printData(res))
    .catch((error) => console.log(error));
}

function printData(data) {
  const infoRepos = [];

  for (project of data) {
    const dataRepositories = {
      id: project.id,
      title: project.name,
      url_git: project.html_url,
      language: project.language,
      url_project: project.homepage,
      description: project.description,
      topics: project.topics,
    };
    infoRepos.push(dataRepositories);
  }

  printCardsHTML(infoRepos);
}

function printCardsHTML(dataCards) {
  for (cardInfo of dataCards) {
    console.log(cardInfo);
    const cardTemplate = document.createElement("div");
    cardTemplate.innerHTML = `
    <div class="col">
        <div class="card h-100">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${cardInfo.title}</h5>
      <p class="card-text">${cardInfo.description}.</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
    </div>
        `;

    cards.appendChild(cardTemplate);
  }
}
