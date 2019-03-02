import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import styles from "./LoginForm.styles";
import LoginFormSectionStyled from "./LoginSection/LoginSection";
import Button from '@material-ui/core/Button';
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


    render() {
        const {classes} = this.props;

        return (
            <div className="Login">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{minHeight: '100vh'}}
                >
                    <Grid item>

                        <Button color="primary"
                                onClick={() => this.setState({intention: "Login"})}
                                className={classNames(classes.cssRoot)}>Login</Button>

                        <Card
                            className={classes.card}
                            elevation={10}

                        >

                            <h1>Welcome!</h1>
                            {this.state.intention === "Login" ?
                                <LoginFormSectionStyled /> :
                                this.state.intention === "Register" ?
                                    <RegisterFormSectionStyled /> :
                                    " "}


                        </Card>
                        <Button color="primary"
                                onClick={() => this.setState({intention: "Register"})}
                                className={classNames(classes.cssRoot)}>Register</Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const LoginFormStyled = withStyles(styles)(LoginForm);

export default LoginFormStyled;


