import { useContext } from "react";
import Context from "../context";

const BodyPlayerChoice = () => {
  const { playerChoice } = useContext(Context);
  const playerChoiceContent = !playerChoice ? "Make a choice" : playerChoice;
  return (
    <div className="w-1/2">
      <h2 className="text-2xl text-white text-center text-opacity-50">
        Player
      </h2>
      <div className="text-4xl text-white text-center mb-3">
        {playerChoiceContent}
      </div>
    </div>
  );
};

export default BodyPlayerChoice;
