const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

//inquirer will go here

init();

// Display logo text, load main prompts
function init() {
  const logoText = logo({ name: "Great Bay" }).render();

  console.log(logoText);

  loadMainPrompts();
}

async function loadMainPrompts() {
  const { choice } = await prompt({
    name: "choice",
    type: "list",
    message: "Would you like to [SHOW] items up for auction or [EXIT]?",
    choices: ["SHOW", "EXIT"],
  });


  switch (choice) {
    case "SHOW":
      return showAuctions();
    case "EXIT":
      quit();
  }
}
async function showAuctions() {
  const auctions = await db.getAllAuctions();

  console.log("\n");
  console.log("test");
  console.table(auctions);

  loadMainPrompts();
}

//changed this to connection.end
function quit() {
  console.log("Goodbye!");
  process.exit();
}

