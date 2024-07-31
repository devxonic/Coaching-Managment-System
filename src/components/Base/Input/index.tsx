import "./index.css";

type inputtype = {
  id?: string;
  type?: string;
  value?: string;
};

const Input = (prop: inputtype) => {
  return (
    <input
      className="input"
      type={prop?.type}
      name=""
      id={prop.id}
      value={prop.value}
    />
  );
};

export default Input;
