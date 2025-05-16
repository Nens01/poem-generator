function displayPoem(event) {
  new Typewriter("#poem", {
    strings: "Nwanyi bu ife, a na-azọ ya ka ego.",
    autoStart: true,
    delay: 0.4,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let apiKey = "96t02003264bec3oa3b933aaca0f777f";
  let prompt =
    "User instructions: write a poem in igbo language about ${context}";
  let context =
    "You are an igbo man, and love to write poems in igbo language, continue this poem to pull the heartstrings of your lover";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key={apiKey}`;

  console.log("Generating poem...");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
