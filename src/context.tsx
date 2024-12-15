import { createContext } from "react";

type context = {
  playerScore: number;
  setPlayerScore: React.Dispatch<React.SetStateAction<number>>;
  compScore: number;
  setCompScore: React.Dispatch<React.SetStateAction<number>>;
  playerChoice: string;
  setPlayerChoice: React.Dispatch<React.SetStateAction<string>>;
  compChoice: string;
  setCompChoice: React.Dispatch<React.SetStateAction<string>>;
  gameResult: string;
  setGameResult: React.Dispatch<React.SetStateAction<string>>;
  gameStatus: boolean;
  setGameStatus: React.Dispatch<React.SetStateAction<boolean>>;
  canPlayGame: boolean;
  setCanPlayGame: React.Dispatch<React.SetStateAction<boolean>>;
};

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
