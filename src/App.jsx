import React from "react";
import Input from "./components/UI/Input";

const App = () => {
  return (
    <div style={{display: "flex", gap: "20px"}}>
      <Input
        placeholder="Standard Input"
        variant="standard"
      />
      <Input
        placeholder="Outlined Input"
        variant="outlined" 
      />
      <Input
        placeholder="Filled Input"
        variant="filled" 
      />
    </div>
  );
};

export default App;
