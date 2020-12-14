import React, { LinkTo, Component, Fragment } from "react";

// import api from "../api/users.js";
import { wqLink } from "react-router-dom";

import NavBar from "./navBar/NavBar";
// import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import ProfileCreate from "./profile/ProfileCreate.js";
import Grid from "@material-ui/core/Grid";

import { FormControl, FormLabel, Input, Fade } from "@material-ui/core";

// import createMuiTheme from "../component/Mui";
// import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
// import { CSSTransition } from "react-transition-group";
// import white from "@material-ui/core/colors/";

// import ClassNames from "./component/ButtonGradTest.js";
// import InputObjects from ".component/profile/InputObjects";

export default class Login extends Component {
  import;
  state = {
    UserInputs: {
      username: "",
      password: ""
    },
    LoginStyles: { Color: "white", textAlign: "center" }
  };

  handleSignUp = (event) => {
    event.preventDefault();
    console.log("Add the API function here", this.state);
    // api.signup(this.state).then(function(response) {
    //   console.log(response);
    // });
  };
  captureInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handlecheckExisting = (check) => {
    this.setState({ check: true });
  };

  handlecheckNew = (check) => {
    this.setState({ check: false });
  };

  render() {
    return (
      <div>
        {/* <CSSTransition> */}
        {/* <MuiThemeProvider muiTheme={createMuiTheme}> */}
        <NavBar> </NavBar>
        <Grid item xs={12}>
          <ButtonBase onClick={this.handlecheckExisting}>
            {" "}
            <h1> New User</h1>
          </ButtonBase>
          <br />
          <ButtonBase onClick={this.handlecheckNew}>
            {" "}
            <h1> Existing User </h1>
          </ButtonBase>
        </Grid>
        <br />
        {/* The Log in Existing Account */}
        <Fade in={this.state.check} mountOnEnter unmountOnExit>
          <FormControl>
            <Input
              justify="center"
              id="UserName"
              placeholder="UserName"
              fullWidth={true}
            />
            <Input
              justify="center"
              id="Password"
              placeholder="Password"
              fullWidth={true}
              to="/"
            />
            <ButtonBase Link to="/profileCreate">
              {" "}
              Sign In
            </ButtonBase>
          </FormControl>
        </Fade>{" "}
        <Fade in={this.state.check ? false : true} mountOnEnter unmountOnExit>
          <FormControl>
            <FormLabel fullWidth={true}>
              Provide a Name for you new profile?
            </FormLabel>
            <Input
              id="Thisspecialthing change me"
              placeholder="Kvothe, Reshi or Maedre?"
              fullWidth={true}
            />
            <br />
            <Input id="OtherID" placeholder="UserName" fullWidth={true} />
            <br />
            <Input id="OtherID" placeholder="Password" fullWidth={true} />
            <ButtonBase Link to="http://localhost:3000/profileTypes">
              {" "}
              Create Account
            </ButtonBase>
          </FormControl>
        </Fade>
        <br /> <br /> <br /> <br /> <br />
        <br /> <br /> <br /> <br /> <br />
        {/* </MuiThemeProvider> */}
        {/* </CSSTransition> */}
      </div>
    );
  }
}
