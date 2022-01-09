import { useStore } from "../store";
import CompC from "./CompC";

const CompB = () => {
  console.log(
    "Component B consumes useStore and passes context value to Component C as a prop, therefore it should re-render on context change"
  );

  const {
    store: { complex }
  } = useStore();

  return (
    <>
      <h3>Component B</h3>

      <CompC complex={complex} />
    </>
  );
};

export default CompB;
