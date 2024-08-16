import * as React from "react";

export default function Input(prop: any) {
  let { className, value, onChange, disabled } = prop;
  return (
    <input
      disabled={disabled}
      className={className}
      style={{ outline: "none" }}
      value={value}
      onChange={(e) => (onChange ? onChange(e) : null)}
    />
  );
}
