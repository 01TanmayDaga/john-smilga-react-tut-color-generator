import { useState } from "react";
import { toast } from "react-toastify";

export default function Form({ mainColor, setMainColor }) {
  const [currentColor, setCurrentColor] = useState(mainColor);

  const handleColorChange = (e) => {
    e.preventDefault();
    setCurrentColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isHexColor(currentColor)) {
      toast.error("Invalid color");
      return;
    }
    setMainColor(currentColor);
  };

  function isHexColor(hex) {
    return typeof hex === "string" && hex.length === 7;
  }

  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form">
        <input
          type="color"
          name="color-input"
          value={currentColor}
          onChange={handleColorChange}
        ></input>
        <input
          type="text"
          name="hex-code-input"
          value={currentColor}
          onChange={handleColorChange}
        ></input>
        <button
          type="submit"
          className="btn"
          name="submit-button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
