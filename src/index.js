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
  let apiKey = "96t02003264bec3oa3b933aaca0f777f";
  let prompt = `User instructions: generate a poem in Nigerian igbo language about ${instructionsInput.value}`;
  let context =
    "You are a romantic igbo man, and love to write poems in igbo language, your mission is to write a 4 line poem in basic HTML, be sure to follow the user instructions given";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem...");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("click", generatePoem);
