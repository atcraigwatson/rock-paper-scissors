import { useContext } from "react";
import Context from "../context";

interface Props {
  name: string;
}

// Variable to track the player choice. Needed for the game logic
// outside the state/context of react.
export let trackPlayersChoice = "";

// Create the Rock, Paper, Scissors buttons using one component
// and passing props to give the button name and set the playerChoice
// <ChoiceButton name="Rock" /> would create the rock button.
const ChoiceButton = ({ name }: Props) => {
  const { setPlayerChoice, setCanPlayGame } = useContext(Context);
  const handleClick = () => {
    trackPlayersChoice = name;
    setPlayerChoice(trackPlayersChoice);
    setCanPlayGame(true);
    console.log(`Player chose ${trackPlayersChoice}`);
  };
  return (
    <button
      onClick={handleClick}
      className="px-5 py-3 bg-white bg-opacity-10  text-white w-full hover:bg-opacity-15"
    >
      {name}
    </button>
  );
};

export default ChoiceButton;
