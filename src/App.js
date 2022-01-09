import CompA from "./components/CompA";
import CompB from "./components/CompB";
import { StoreProvider } from "./store";
import "./styles.css";

export default function App() {
  console.log("App shouldn't render more than once\t");

  return (
    <StoreProvider>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem"
        }}
      >
        <section>
          <CompA />
        </section>

        <section>
          <CompB />
        </section>
      </div>
    </StoreProvider>
  );
}
