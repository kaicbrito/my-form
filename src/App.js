import { useState } from "react";
import BasicForm from "./components/BasicForm";
import Consultar from "./components/Consultar";
import "./App.css";

function App() {
  const [view, setView] = useState("basic");
  return (
    <div className="App">
      <nav>
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Basic
        </h3>
        <h3
          onClick={() => setView("consultar")}
          style={{ color: view === "consultar" ? "#fff" : "" }}
        >
          Consultar
        </h3>
      </nav>
      {view === "basic" ? <BasicForm /> : <Consultar />}
    </div>
  );
}

export default App;
