const btn = document.querySelector(".btn");
const joke = document.querySelector(".joke");

btn.addEventListener("click", getJokes);

async function getJokes() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  let responseData = await response.json();

  joke.innerText = responseData.joke;
}
