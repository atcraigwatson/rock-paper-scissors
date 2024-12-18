// Import context
import { useContext } from "react";
import Context from "../context";

// Import components
import ChoiceButton from "./ChoiceButton";
import PlayButton from "./PlayButton";
import NextRoundButton from "./NextRoundButton";

// Create Footer component
const Footer = () => {
  // Get gameStatus from context
  const { gameStatus } = useContext(Context);
  // If gameStatus is true, return the footer element
  // with Rock, Paper, Scissors buttons.
  if (gameStatus) {
    return (
      <footer className="flex">
        <ChoiceButton name="Rock" />
        <ChoiceButton name="Paper" />
        <ChoiceButton name="Scissors" />
        <PlayButton />
      </footer>
    );
    // If the gameStatus is false, return the next round
    // button in the footer element.
  } else {
    return (
      <footer className="flex">
        <NextRoundButton />
      </footer>
    );
  }
};

export default Footer;
