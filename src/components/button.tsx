import { useState } from "react";

const Button = ({ label }: any) => {
  const [localState, setLocalState] = useState(0);
  console.log("buttonRender", label);
  return (
    <button onClick={() => setLocalState((prev) => prev + 1)}>{label}</button>
  );
};

export default Button;
