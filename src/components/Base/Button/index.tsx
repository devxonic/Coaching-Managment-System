import Link from "next/link";
import React from "react";
type ButtonType = {
  title: string;
  classes: string;
  onClick?: Function;
};

const CustomButton = (prop: ButtonType) => {
  return (
    <div>
      <button className={prop.classes} onClick={() => prop.onClick}>
        {prop.title}
      </button>
    </div>
  );
};

export default CustomButton;
