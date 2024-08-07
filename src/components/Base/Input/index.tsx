import * as React from "react";

export default function Input(prop: any) {
  console.log(prop);
  return (
    <input
      className={prop.className}
      style={{ outline: "none" }}
      value={prop.value}
    />
  );
}
