import useInput from "../store/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    showError: nameInputHasError,
    valueBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    showError: emailInputHasError,
    valueBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "" && value.indexOf("@") !== -1);

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
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
        {nameInputHasError && (
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
        {emailInputHasError && (
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
