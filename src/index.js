function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "798dc9fa0390f84ceb8a41oa8b735ct6";
  let context =
    "You are a witty poem expert and love to write short poems.Your mission is to generate a 4-line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a poem title, and sign the poem at the end with '~ SheCodes AI 💜' inside a <strong> element.";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink_me">⌛Generating a poem about ${instructionsInput.value}...</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
