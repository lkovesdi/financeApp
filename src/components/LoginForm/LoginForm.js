import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import styles from "./LoginForm.styles";
import LoginFormSectionStyled from "./LoginSection/LoginSection";
import StandardButtonMain from "../../components/Buttons/StandardButton/StandardButtonMain";
import classNames from "classnames";
import RegisterFormSectionStyled from "./RegisterSection/RegisterSection";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      intention: ""
    };
  }

  changeIntention(intention) {
    this.setState({ intention });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="Login">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item>
            <StandardButtonMain
              performAction={() => this.changeIntention("Login")}
              name={"Login"}
            />

            <Card className={classes.card} elevation={10}>
              <h1>Welcome!</h1>
              {this.state.intention === "Login" ? (
                <LoginFormSectionStyled />
              ) : this.state.intention === "Register" ? (
                <RegisterFormSectionStyled />
              ) : (
                " "
              )}
            </Card>
              <StandardButtonMain
                  performAction={() => this.changeIntention("Register")}
                  name={"Register"}
              />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const LoginFormStyled = withStyles(styles)(LoginForm);

export default LoginFormStyled;
