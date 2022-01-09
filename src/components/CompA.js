import { useStore } from "../store";

const Render = () => {
  console.log("Component A Render Child is rendered on count change");

  const {
    store: { count },
    dispatch
  } = useStore();

  return (
    <>
      <div>
        <p>
          <button
            onClick={() => {
              dispatch({
                type: "increment"
              });
            }}
          >
            +
          </button>
        </p>
        Count <strong>{count}</strong>
        <p>
          <button
            onClick={() => {
              dispatch({
                type: "decrement"
              });
            }}
          >
            -
          </button>
        </p>
      </div>
    </>
  );
};

const CompA = () => {
  console.log("Component A should be rendered ONLY once");
  return (
    <>
      <h3>Component A</h3>

      <Render />
    </>
  );
};

export default CompA;
