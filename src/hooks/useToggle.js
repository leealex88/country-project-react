import { useState } from "react";

function useToggle(initialValue) {
  const [toggle, setToggle] = useState(initialValue);

  const toggleElement = () => {
    setToggle(!toggle);
  };
  //returning piece of state and function to toggle it
  return [toggle, toggleElement];
}

export default useToggle;
