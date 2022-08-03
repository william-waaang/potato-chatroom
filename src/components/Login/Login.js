import classes from "./Login.module.scss";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useRef, useState } from "react";
import showToast from "../../composition/showToast";
import { apiGetAllUsers, apiCreateUser } from "../../apis/index.js";

const Login = () => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const userNameInputRef = useRef(null);

  const [isSignUp, setIsSignUp] = useState(true);

  const switchSignUpState = async () => {
    setIsSignUp((prevState) => !prevState);
    const res = await apiGetAllUsers();
    console.log(res);
  };

  const accountReminder = (
    <p className={classes.reminder}>
      {isSignUp ? "Don't have an account? " : "Already have an account? "}
      <span>
        <strong>
          <u onClick={switchSignUpState} className={classes.action}>
            {isSignUp ? "Sign up!" : "Log in!"}
          </u>
        </strong>
      </span>
    </p>
  );

  const loginHandler = async (event) => {
    event.preventDefault();
    console.log("login");
  };

  const signupHandler = async (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const username = userNameInputRef.current?.value;
    await apiCreateUser({
      email,
      password,
      username: username,
    });

    userNameInputRef.current.value =
      emailInputRef.current.value =
      passwordInputRef.current.value =
        "";

    showToast("success", "登入成功");
  };
  return (
    <div className={classes.login}>
      <Card className={classes.window}>
        <header>
          <h1 className={classes.title}>HELLO WORLD</h1>
        </header>
        <form className={classes.form}>
          {isSignUp ? (
            ""
          ) : (
            <div className={classes.input}>
              <input
                ref={userNameInputRef}
                type="text"
                placeholder="UserName"
              ></input>
            </div>
          )}

          <div className={classes.input}>
            <input ref={emailInputRef} type="email" placeholder="Email"></input>
          </div>
          <div className={classes.input}>
            <input
              ref={passwordInputRef}
              type="password"
              placeholder="Password"
            ></input>
          </div>
        </form>
        <Button
          className={classes.button}
          onClick={isSignUp ? loginHandler : signupHandler}
        >
          {isSignUp ? "Log in" : "Sign Up"}
        </Button>
        <div>{accountReminder}</div>

        <div className={classes.systemInfo}>
          <select>
            <option value="english">English</option>
            <option value="chinese">繁體中文</option>
          </select>
          <p>v 1.0.0</p>
        </div>
      </Card>
    </div>
  );
};

export default Login;
