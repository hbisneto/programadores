import React from "react";
import Header from "./Header";

import "./App.css";

function App() {
  return (
    <div>
      <Header
        name="[{Programadores/>"
        links={["Sobre", "Grupo", "Materiais", "Vagas", "Contribuidores"]}
      ></Header>
    </div>
  );
}

export default App;
