import { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./index.scss";
import AuthContext from "../../../contexts/AuthContext";
import PageWrapper from "../../PageWrapper";
import { logInHandler } from "../../../utils/submitHandler";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginPage = () => {
  const context = useContext(AuthContext);
  const history = useHistory();
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [values, setValues] = useState({
    email: "",
    password: '',
    showPassword: false,
  });
  const [error, setError] = useState(null);
  const showError = () => {
    if (error) {
      return (
        <div className="error">*{error}</div>
      )
    }
  }
  const handleChange = (prop) => (event) => {

    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onLoginSubmitHandler = (e) => {
    e.preventDefault();
    const email = values.email
    const password = values.password
   if (!email.match(mailFormat)) {
      setError("You have entered an invalid email address!")
    } else {
    logInHandler({ email, password }).then((data) => {
      context.logIn(data);
      history.push("/");
    }).catch((err) => {
      setError("Invalid Username or Password")
    });
  }
  };

  return (
    <PageWrapper>

        <section className="login">
          <form onSubmit={onLoginSubmitHandler}>
            <fieldset className="form">
              <legend>Login</legend>
              <p className="form_instructions">
                Please enter your e-mail and password:
              </p>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
              <Input
                id="standard-adornment-password"
                type={'text'}
                value={values.email}
                onChange={handleChange('email')}
                required
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {showError()}
              {/* <Link
                href="#"
                className="login_forgot-link link"
                data-action="display-recover-form"
              >
                Forgot your password?
              </Link> */}
              <input
                className="btn btn-pink"
                type="submit"
                className="submit"
                value="Login"
              />
              <p className="login_register-link">
                Don't have an account?{" "}
                <Link className="link link--secondary" href="/account/register">
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </section>
    
    </PageWrapper>
  );
};
export default LoginPage;
