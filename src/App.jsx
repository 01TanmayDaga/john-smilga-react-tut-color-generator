import { useState } from "react";
import Form from "./Form";
import Values from "values.js";
import ColorsList from "./ColorsList";

const App = () => {
  const [mainColor, setMainColor] = useState("#ffffff");

  return (
    <div className="container">
      <Form mainColor={mainColor} setMainColor={setMainColor} />
      <ColorsList colors={new Values(mainColor).all(10)}></ColorsList>
    </div>
  );
};
export default App;
