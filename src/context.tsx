// Import createContext from react
import { createContext } from "react";

// Declare the context's
type context = {
  // Tracks and sets the players score
  playerScore: number;
  setPlayerScore: React.Dispatch<React.SetStateAction<number>>;
  // Tracks and sets the computers score
  compScore: number;
  setCompScore: React.Dispatch<React.SetStateAction<number>>;
  // Tracks and sets the players choice of Rock, Paper or Scissors
  playerChoice: string;
  setPlayerChoice: React.Dispatch<React.SetStateAction<string>>;
  // Tracks and sets the computers choice of Rock, Paper or Scissors
  compChoice: string;
  setCompChoice: React.Dispatch<React.SetStateAction<string>>;
  // Tracks and sets the game result after the play button is clicked
  gameResult: string;
  setGameResult: React.Dispatch<React.SetStateAction<string>>;
  // ** Confirm if gameStatus can be merged with canPlayGame??
  gameStatus: boolean;
  setGameStatus: React.Dispatch<React.SetStateAction<boolean>>;
  // Tracks and sets the game status to allow for disabling buttons
  canPlayGame: boolean;
  setCanPlayGame: React.Dispatch<React.SetStateAction<boolean>>;
};

// Set the initial context values
const Context = createContext<context>({
  playerScore: 0,
  setPlayerScore: () => {},
  compScore: 0,
  setCompScore: () => {},
  playerChoice: "",
  setPlayerChoice: () => {},
  compChoice: "",
  setCompChoice: () => {},
  gameResult: "",
  setGameResult: () => {},
  gameStatus: false,
  setGameStatus: () => {},
  canPlayGame: false,
  setCanPlayGame: () => {},
});

export default Context;
