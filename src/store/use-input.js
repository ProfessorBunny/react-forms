import { useState } from "react";
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [istouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const showError = istouched && !valueIsValid;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    showError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
