import BodyPlayerChoice from "./BodyPlayerChoice";
import BodyCompChoice from "./BodyCompChoice";
import BodyResult from "./BodyResult";

const Body = () => {
  return (
    <section className="px-5 py-20">
      <div className="flex py-5">
        <BodyPlayerChoice />
        <BodyCompChoice />
      </div>
      <BodyResult />
    </section>
  );
};

export default Body;
