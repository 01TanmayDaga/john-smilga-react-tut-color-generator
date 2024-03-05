import React from "react";
import { toast } from "react-toastify";

function SingleColor({ color, index }) {
  const saveToClipboard = async () => {
    try {
      navigator.clipboard.writeText(color.hex);
      toast.success("Succesfully saved to clipboard");
    } catch (errro) {
      toast.error(errro);
    }
  };

  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ backgroundColor: `#${color.hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">{`#${color.hex}`}</p>
    </article>
  );
}

export default SingleColor;
