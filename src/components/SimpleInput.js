import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [inputIsValid, setInputIsValid] = useState(false);
  const [formIstouched, setFormIsTouched] = useState(false);

  const nameInputRef = useRef();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim() !== "") {
      setInputIsValid(true);
    }
  };

  const inputBlurHandler = () => {
    setFormIsTouched(true);
    if (enteredName.trim() === "") {
      setInputIsValid(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setFormIsTouched(true);
    if (enteredName.trim() === "") {
      setInputIsValid(false);
      return;
    }
    setInputIsValid(true);

    console.log("input from reading change with state: " + enteredName);
    const enteredNameRef = nameInputRef.current.value;
    console.log("input from reading value with ref: " + enteredNameRef);

    // nameInputRef.current.value = "";

    setEnteredName(" ");
  };
  const nameInputIsValid = formIstouched && !inputIsValid;
  const formClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          onChange={nameChangeHandler}
          onBlur={inputBlurHandler}
          value={enteredName}
          type="text"
          id="name"
        />
        {nameInputIsValid && (
          <p className="error-text">Please enter a valid input</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
