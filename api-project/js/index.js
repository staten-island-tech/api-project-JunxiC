const URLs = "https://pokeapi.co/api/v2/pokemon";

async function getData(URLs) {
  try {
    const response = await fetch(URLs);
    const data = await response.json();
    document.getElementById("api-response").textContent = data.content;
  } catch (error) {
    console.log(error);
  }
}
getData(URLs);
