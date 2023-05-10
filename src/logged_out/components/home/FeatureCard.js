import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

import withStyles from "@mui/styles/withStyles";

const styles = (theme) => ({
  iconWrapper: {
    borderRadius: theme.shape.borderRadius,
    textAlign: "center",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1) * 1.5,
  },
  baskervilleFont: {
    fontFamily: "Baskerville, serif",
  },
});

function FeatureCard(props) {
  const { classes, Icon, color, headline, text } = props;
  return (
    <Fragment>
      <div
        className={classes.iconWrapper}
        style={{
          color: color,
          backgroundColor: "none",
          padding: 0,
        }}
      >
        {Icon}
      </div>
      <Typography variant="h4" paragraph className={classes.baskervilleFont}>
        {headline}
      </Typography>
      <Typography variant="h6" color="textSecondary" className={classes.baskervilleFont}>
        {text}
      </Typography>
    </Fragment>
  );
}

FeatureCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(FeatureCard)