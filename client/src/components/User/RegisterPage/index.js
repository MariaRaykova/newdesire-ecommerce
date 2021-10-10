import { useHistory } from "react-router-dom";
// import ButtonLight from "../ButtonLight";
import "./index.scss";
import { registerHandler } from "../../../utils/submitHandler";
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

import { useState } from "react";

const RegisterPage = () => {
  const history = useHistory();
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: '',
    rePassword: "",
    showPassword: false,
  });
  const [error, setError] = useState(null);
  const handleChange = (prop) => (event) => {
  
    setValues({ ...values, [prop]: event.target.value });
  };

  const showError = () => {
    if (error) {
      return (
        <div className="error">*{error}</div>
      )
    }
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onRegisterSubmitHandler = (e) => {
    e.preventDefault();
    const name = values.name
    const email = values.email
    const password = values.password;
    const rePassword = values.rePassword;
    // const showErrorMessage=()=>{
    if (name.length < 3) {
      setError("Your name should be at least 3 characters")
    } else if (!email.match(mailFormat)) {
      setError("You have entered an invalid email address!")
    } else if (password !== rePassword) {
      setError("The password and confirmation password do not match")
    } else {
      registerHandler({ name, email, password }).then(() => {
        history.push("/login");
      })
    }
  };
 
  return (
    <main>
      <section className="register">
        <form onSubmit={onRegisterSubmitHandler}>
          <fieldset className="form" >
            <legend>Register</legend>
            <p className="form_instructions">
              Please enter your name, e-mail and password:
            </p>
        
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Name</InputLabel>
              <Input
                id="standard-adornment-password"
                type={'text'}
                value={values.name}
                onChange={handleChange('name')}
              />
            </FormControl>
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
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Repeat Password</InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'rePassword'}
                value={values.rePassword}
                onChange={handleChange('rePassword')}
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
            <input
              className="btn btn-pink"
              type="submit"
              className="submit"
              value="Register"
            />
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default RegisterPage;
