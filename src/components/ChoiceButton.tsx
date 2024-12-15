// Import context
import { useContext } from "react";
import Context from "../context";

// Create props for naming the button and passing the name
// to setPlayerChoice
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
  // Get the necessary state for the component
  const { setPlayerChoice, setCanPlayGame } = useContext(Context);

  // Create the handle click function
  const handleClick = () => {
    // Sets the trackPlayerChoice variable to the name of the button
    // being clicked.
    trackPlayersChoice = name;
    // Sets the playerChoice state to trackPlayerChoice
    setPlayerChoice(trackPlayersChoice);
    // Sets canPlayGame state to true with enables the play button
    // by setting the disable attr to false
    setCanPlayGame(true);
    // Log the choice to the console so the game can be tracked their to
    console.log(`Player chose ${trackPlayersChoice}`);
  };
  // Return the button element with classes from tailwind and pass name
  // as the button text.
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
