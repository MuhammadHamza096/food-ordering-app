import React from 'react';

import { Grid, ListItemIcon, ListItemText, AppBar, useTheme, Toolbar, makeStyles } from '@material-ui/core';
import { Lock, OfflineBolt } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { logout } from '../../Features/Auth/actions';
import RouteNames from '../../routes/RouteNames';
import AppBarMenuButton from './AppBarMenuButton/AppBarMenuButton';
import { StyledDiv, StyledMenuItem } from './Style';

const NavBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };
  const useStyles = makeStyles(() => ({
    NisumImageLogo: {
      height: '80px',
      minwidth: '160px',
      marginLeft: '20px',
    },
    appBarStyle: {
      background: 'white',
      borderBottom: '5px solid #00B3E3',
    },
  }));
  const classes = useStyles();
  const history = useHistory();
  const { NisumImageLogo, appBarStyle } = classes;

  const { resetPassword } = RouteNames;

  return (
    <StyledDiv>
      <AppBar className={appBarStyle} position="sticky">
        <Toolbar>
          <img alt="logo" className={NisumImageLogo} src="https://www.nisum.com/hubfs/logo_nisum.svg" />
          <Grid alignItems="flex-end" container justifyContent="flex-end">
            <AppBarMenuButton>
              <StyledMenuItem onClick={() => history.push(resetPassword)} theme={theme}>
                <ListItemIcon>
                  <Lock fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Reset Password" />
              </StyledMenuItem>
              <StyledMenuItem onClick={logOut} theme={theme}>
                <ListItemIcon>
                  <OfflineBolt fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Log Out" />
              </StyledMenuItem>
            </AppBarMenuButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </StyledDiv>
  );
};

export default NavBar;
