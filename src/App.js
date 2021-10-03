import React, { useContext } from "react";
import TODO from "./todo";
import "./App.css";

import { Theme } from "./index";

function App() {
  const theme = useContext(Theme);
  document.body.style.backgroundColor = theme.bg;
  document.body.style.color= theme.text;

  return (
    <div className="mt-5  p-2">
      <TODO />
    </div>
  );
}

export default App;
