import React from 'react';

import { Card, Grid, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button/Button';
import TextField from '../../components/TextField/TextField';
import { signUp } from './actions';

function SignUpContainer() {
  const dispatch = useDispatch();

  const credential = {
    email: '',
    password: '',
  };

  const signUpUser = async () => {
    dispatch(signUp({ email: credential.email, password: credential.password }));
  };

  const handleChange = (e) => {
    const { name, value } = e;
    credential[name] = value;
  };

  return (
    <Grid alignItems="center" container direction="column" justifyContent="center" style={{ minHeight: '100vh' }}>
      <Typography variant="h1">Sign Up</Typography>
      <br />
      <Card margin="auto" maxWidth="400px" minWidth="300px">
        <div>
          <TextField
            label="Enter Email"
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
            type="email"
            variant="outlined"
          />
          <br />
          <TextField
            label="Enter Password"
            name="password"
            onChange={(e) => handleChange(e)}
            type="password"
            variant="outlined"
          />
          <br />

          <Button color="secondary" onClick={signUpUser} variant="contained">
            Sign Up
          </Button>
        </div>
      </Card>
    </Grid>
  );
}

export default SignUpContainer;
