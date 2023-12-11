import React from "react";
import { useState } from "react";

const useToogle = (initialValue) => {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const handleToggle = () => setCurrentValue((prev) => !prev);
  return [currentValue, handleToggle];
};

export default useToogle;
