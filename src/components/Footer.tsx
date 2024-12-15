import { useContext } from "react";
import Context from "../context";
import ChoiceButton from "./ChoiceButton";
import PlayButton from "./PlayButton";
import NextRoundButton from "./NextRoundButton";

const Footer = () => {
  const { gameStatus } = useContext(Context);
  if (gameStatus) {
    return (
      <footer className="flex">
        <ChoiceButton name="Rock" />
        <ChoiceButton name="Paper" />
        <ChoiceButton name="Scissors" />
        <PlayButton />
      </footer>
    );
  } else {
    return (
      <footer className="flex">
        <NextRoundButton />
      </footer>
    );
  }
};

export default Footer;
