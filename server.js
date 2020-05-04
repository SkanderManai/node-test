const express = require("express");
const path = require("path");

const complements = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do",
];

const insults = [
  "You smell like last week's chich kebab",
  "Your mother was a hamster and your father smelled of elderberries",
  "What are those?",
  "Did you gain weight",
  "I hope you get an unreproducible bug in your code",
  "Your momma so fat my computer doesn't have enough storage to house a picture of her",
  "Is your dad back from the store yet?",
];

function getRandomInsult() {
  const randomIndex = Math.floor(Math.random() * insults.length);
  return insults[randomIndex];
}

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

const app = express();

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function (req, res) {
  res
    .json({
      complement: getRandomComplement(),
    })
    .end();
});

app.get("/insult", function (req, res) {
  res
    .json({
      insult: getRandomInsult(),
    })
    .end();
});

app.use("/public", express.static("./public"));

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`listening on http://localhost:${port}`);
