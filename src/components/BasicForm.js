import useInput from "../store/use-input";
const BasicForm = (props) => {
  const {
    value: enteredFname,
    isValid: fnameIsValid,
    showError: showFnameError,
    valueChangeHandler: fnameChangeHandler,
    valueBlurHandler: fnameBlurHandler,
    reset: resetFname,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredLname,
    isValid: lnameIsValid,
    showError: showLnameError,
    valueChangeHandler: lnameChangeHandler,
    valueBlurHandler: lnameBlurHandler,
    reset: resetLname,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    showError: showEmailError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((val) => val.trim() !== "" && val.indexOf("@") !== -1);

  let formIsValid = false;

  if (fnameIsValid && lnameIsValid && emailIsValid) {
    formIsValid = true;
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!fnameIsValid || !emailIsValid || !lnameIsValid) {
      return;
    }

    console.log(enteredFname);
    console.log(enteredLname);
    console.log(enteredEmail);

    resetFname();
    resetLname();
    resetEmail();
  };

  const fnameInputClasses = showFnameError
    ? "form-control invalid"
    : "form-control";
  const lnameInputClasses = showLnameError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = showEmailError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={fnameInputClasses}>
          <label htmlFor="name">First Name</label>

          <input
            type="text"
            id="name"
            onChange={fnameChangeHandler}
            onBlur={fnameBlurHandler}
          />
        </div>
        {showFnameError && (
          <p className="error-text">Please enter a valid First Name</p>
        )}
        <div className={lnameInputClasses}>
          <label htmlFor="lname">Last Name</label>

          <input
            type="text"
            id="lname"
            onChange={lnameChangeHandler}
            onBlur={lnameBlurHandler}
          />
        </div>
        {showLnameError && (
          <p className="error-text">Please enter a valid Last Name</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>

        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      {showEmailError && (
        <p className="error-text">Please enter a valid Email</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
