// Import context
import { useContext } from "react";
import Context from "../context";

// Create Header component
const Header = () => {
  // Get playerScore and compScore from context
  const { playerScore, compScore } = useContext(Context);

  // Return a header element with the player score and the comp score
  // ?? Can the / should the scores be in their own components ??
  return (
    <header className="p-5 bg-gradient-to-br from-orange-500 to-orange-700 text-white ">
      <div>
        <h1 className="font-semibold text-3xl text-center pb-5">
          Rock - Paper - Scissors
        </h1>
      </div>
      <div className="flex justify-center gap-5">
        <div className="px-5 py-3 bg-white bg-opacity-10 rounded">
          Player Score - {playerScore}
        </div>
        <div className="px-5 py-3 bg-white bg-opacity-10 rounded">
          Comp Score - {compScore}
        </div>
      </div>
    </header>
  );
};

export default Header;
