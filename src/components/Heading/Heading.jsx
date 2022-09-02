import React from "react";
import "./Heading.css";

export default function Heading(name) {
  return (
    <div className="featuredProducts">
      <h1>{name.name}</h1>
    </div>
  );
}
