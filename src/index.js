function displayPoem(response) {
  const poem = response.data.poem;
  new Typewriter("#poem", {
    strings: [poem],
    autoStart: true,
    delay: 400,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "96t02003264bec3oa3b933aaca0f777f";
  let prompt = `User instructions: write a poem in igbo language about ${instructionsInput.value}`;
  let context =
    "You are a romantic igbo man, and love to write poems in igbo language, your mission is to write a 4 line poem in igbo language in basic HTML, be sure to follow the user instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem...");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("click", generatePoem);
