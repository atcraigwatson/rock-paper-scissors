import { useContext } from "react";
import Context from "../context";

const BodyResult = () => {
  const { gameResult } = useContext(Context);
  return (
    <div>
      {!gameResult ? (
        <p className="text-center text-white text-opacity-60">
          Make your choice and click play...
        </p>
      ) : (
        <p className="text-center text-white text-opacity-60">{gameResult}</p>
      )}
    </div>
  );
};

export default BodyResult;
