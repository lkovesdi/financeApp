import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import styles from "./StandardButtonMain.styles";

class ButtonMain extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Button
        color="primary"
        onClick={() => this.props.performAction()}
        className={classNames(classes.cssRoot)}
      >
        {this.props.name}
      </Button>
    );
  }
}

const StandardButtonMain = withStyles(styles)(ButtonMain);

export default StandardButtonMain;
