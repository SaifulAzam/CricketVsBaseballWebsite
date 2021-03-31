import {
  AppBar,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

interface Props {
  classes?: any;
}
interface State {}

const styles = (theme: any) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#000",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  toolbarTitle: {
    flexGrow: 1,
  },

  link: {
    margin: theme.spacing(1, 1.5),
    color: "#fff",
  },
});

class TopNavBar extends Component<Props, State> {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Cricket Vs Baseball</Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Cricket
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Baseball
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="quiz"
              className={classes.link}
            >
              Quiz
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(TopNavBar);
