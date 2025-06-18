import "./App.css";
import CounterProvider from "./provider/counter";
import NewButton from "./components/newButton";

function App() {
  return (
    <>
      <div>
        <CounterProvider>
          <NewButton text="click" />
        </CounterProvider>
      </div>
    </>
  );
}

export default App;
