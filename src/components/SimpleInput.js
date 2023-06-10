import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [formIstouched, setFormIsTouched] = useState(false);
  const inputIsValid = enteredName.trim() !== "";
  const nameInputIsInValid = formIstouched && !inputIsValid;

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const inputBlurHandler = () => {
    setFormIsTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setFormIsTouched(true);
    if (!inputIsValid) {
      return;
    }

    console.log(enteredName);

    setEnteredName("");
    setFormIsTouched(false);
  };

  const formClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameChangeHandler}
          onBlur={inputBlurHandler}
          value={enteredName}
          type="text"
          id="name"
        />
        {nameInputIsInValid && (
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
