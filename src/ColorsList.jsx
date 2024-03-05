import React from "react";
import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

export default function ColorsList({ colors }) {
  return (
    <section className="colors">
      {colors.map((ele, index) => {
        return (
          <SingleColor color={ele} index={index} key={nanoid()}></SingleColor>
        );
      })}
    </section>
  );
}
