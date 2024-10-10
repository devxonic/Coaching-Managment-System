import * as React from "react";

type propType = {
  className?: string;
  value?: string;
  onChange?: any;
  disabled?: any;
  type?: string;
};

export default function Input(prop: propType) {
  let { className, value, onChange, disabled, type } = prop;
  return (
    <input
      type={type}
      disabled={disabled}
      className={className}
      style={{ outline: "none" }}
      value={value}
      onChange={(e) => (onChange ? onChange(e) : null)}
    />
  );
}
