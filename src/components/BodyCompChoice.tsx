import { useContext } from "react";
import Context from "../context";

const BodyCompChoice = () => {
  const { compChoice } = useContext(Context);
  const compChoiceContent = !compChoice ? "I'm waiting..." : compChoice;
  return (
    <div className="w-1/2">
      <h2 className="text-2xl text-white text-center text-opacity-50">Comp</h2>
      <div className="text-4xl text-white text-center mb-3">
        {compChoiceContent}
      </div>
    </div>
  );
};

export default BodyCompChoice;
