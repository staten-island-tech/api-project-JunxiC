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
      console.error(err);
    }
  }
  fetchData(apiEntry);

  const apiResponseDOM = document.getElementById("api-response");
  const putQuoteInHTML = async () => {
    const quote = await fetchData(realAPI);
    apiResponseDOM.innerHTML = `<div class="inner" data-aos="flip-up">
  <p>${quote.name}</p>
  <p>${quote.title}</p>
  <p>Type: ${quote.vision}</p>
  <p>Weapon: ${quote.weapon}</p>
  <p>Nation: ${quote.nation}</p>
  <p>${quote.description}</p>
</div>`;
  };
  putQuoteInHTML();
});
