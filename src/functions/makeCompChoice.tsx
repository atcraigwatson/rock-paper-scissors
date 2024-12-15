export default function makeCompChoice() {
  const randomNumber = Math.random();
  let createCompChoice = "";
  if (randomNumber < 0.34) {
    createCompChoice = "Rock";
    console.log("comp choice set to Rock");
  } else if (randomNumber <= 0.67) {
    createCompChoice = "Paper";
    console.log("comp choice set to Paper");
  } else if (randomNumber > 0.67) {
    createCompChoice = "Scissors";
    console.log("comp choice set to Scissors");
  }
  return createCompChoice;
}
