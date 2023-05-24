import React, { memo } from "react";
import PropTypes from "prop-types";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,

} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
 

import PhoneIcon from "@mui/icons-material/Phone";


const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
  },
  brandText: {
    fontFamily: "'Bakersville'",
    fontWeight: 400,
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});

function NavBar(props) {
  const { classes } = props;

  const handleCallButton = () => {
    window.location.href = "tel:+448431228728"; // Replace the phone number with the desired number to call
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="primary"
            >
              Yacht
            </Typography>
            <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="#DBAD65"
            >
              Trade Partners
            </Typography>
          </div>
          <div>
            <Button
              color="secondary"
              size="large"
              classes={{ text: classes.menuButtonText }}
              startIcon={<PhoneIcon />}
              onClick={handleCallButton}
            >
              Call
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
