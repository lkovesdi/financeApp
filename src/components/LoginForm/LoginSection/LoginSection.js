import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import styles from "./LoginSection.styles";
import { connect } from "react-redux";
import { fetchPosts } from "../../../store/actions/user_actions";

class LoginSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

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
          // style={{minHeight: '100vh'}}
        >
          <Grid item>
            <div className="">
              <Grid container spacing={12} alignItems="flex-end">
                <Grid item>
                  <i className="fas fa-user-circle fa-2x" />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Email" />
                </Grid>
              </Grid>
            </div>

            <FormControl onSubmit={this.handleSubmit}>
              <InputLabel htmlFor="adornment-password">Password</InputLabel>
              <Input
                id="adornment-password"
                type={this.state.showPassword ? "text" : "password"}
                value={this.state.password}
                onChange={this.handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                    >
                      {this.state.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              onClick={() => this.props.fetchPosts("Futurology")}
              className={classNames(classes.cssRoot)}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const dispatchToProps = dispatch => {
  return {
    fetchPosts: val => dispatch(fetchPosts(val))
  };
};

const LoginFormSectionStyled = connect(
  mapStateToProps,
  dispatchToProps
)(withStyles(styles)(LoginSection));

export default LoginFormSectionStyled;
