// Below is an entry point to an api that generates random quotes.
// APIs are usually accessible with a HTML/website link.

import { DOMSelectors } from "./DOM";

// (If you open this in a browser, you will get raw object data.)
const apiEntry = "https://api.genshin.dev/characters/";
const character = document.querySelector(`#character`).value;

const realAPI = `${apiEntry}${character}`;
console.log(realAPI);

DOMSelectors.button2.addEventListener("click", function () {
  let character = DOMSelectors.character.value;
  DOMSelectors.character.value = "";

  const realAPI = `${apiEntry}${character}`;

  fetch(apiEntry)
    .then((response) => response.json())
    .then((data) => console.log(data));

  async function fetchData(apiEntry) {
    try {
      const response = await fetch(apiEntry);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      const apiResponseDOM = document.getElementById("api-response");
      const putQuoteInHTML = async () => {
        apiResponseDOM.innerHTML = `<div class="inner" data-aos="flip-up">l bozo</div>`;
        putQuoteInHTML();
        console.error(err);
      };
    }
  }
  fetchData(apiEntry);

  const apiResponseDOM = document.getElementById("api-response");
  const putQuoteInHTML = async () => {
    const quote = await fetchData(realAPI);
    apiResponseDOM.innerHTML = `<div class="inner" data-aos="flip-up">
  <h5>${quote.name}</h5>
  <h5>${quote.title}</h5>
  <h5>Type: ${quote.vision}</h5>
  <h5>Weapon: ${quote.weapon}</h5>
  <h5>Nation: ${quote.nation}</h5>
  <h5>${quote.description}</h5>
  <h5 class="bold">${quote.rarity} Star</h5>
</div>`;
  };
  putQuoteInHTML();
});
