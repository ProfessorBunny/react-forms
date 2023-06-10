import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIstouched, setNameIsTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIstouched, setEmailIsTouched] = useState(false);

  const inputIsValid = enteredName.trim() !== "";
  const nameInputIsInValid = nameIstouched && !inputIsValid;

  const emailIsValid =
    enteredEmail.trim() !== "" || enteredEmail.indexOf("@") !== -1;
  const emailInputIsInValid = emailIstouched && !emailIsValid;

  let formIsValid = false;

  if (inputIsValid && emailIsValid) {
    formIsValid = true;
  }

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameBlurHandler = () => {
    setNameIsTouched(true);
  };

  const emailBlurHandler = () => {
    setEmailIsTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setNameIsTouched(true);
    setEmailIsTouched(true);
    if (!inputIsValid || !emailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    setEnteredName("");
    setEnteredEmail("");
    setNameIsTouched(false);
    setEmailIsTouched(false);
  };

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          type="text"
          id="name"
        />
        {nameInputIsInValid && (
          <p className="error-text">Please enter a valid input</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          type="email"
          id="email"
        />
        {emailInputIsInValid && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
