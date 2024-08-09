import * as React from "react";

export default function Input(prop: any) {
  let { className, value, onChange } = prop;
  return (
    <input
      className={prop.className}
      style={{ outline: "none" }}
      value={value}
      onChange={(e) => (onChange ? onChange(e) : null)}
    />
  );
}
