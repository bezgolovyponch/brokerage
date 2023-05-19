import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Typography, Button, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import WaveBorder from "../../../shared/components/WaveBorder";
import ZoomImage from "../../../shared/components/ZoomImage";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  card: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    width: "100%",
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(12),
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
      "!important": true,
    },
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("lg")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    maxWidth: "none !important",
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
});

function HeadSection(props) {
  const { classes, theme } = props;
  const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Fragment>
      <div className={classNames(classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <div display="flex" justifyContent="center" className="row">
            <div
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box display={"flex"} flexDirection={isWidthUpLg ? "row" : "column"}>
                  <Grid item xs={12} md={5} paddingTop={isWidthUpLg ? "0" : "12px"} order={{ xs: 2, md: 1 }}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      height="100%"
                    >
                      <Box mb={3} textAlign={isWidthUpLg ? "left" : "center"}>
                        <Typography  style={{ fontFamily: 'Baskerville', color: "white" }} variant={isWidthUpLg ? "h3" : "h4"}>
                          LIAISON AND BROKERAGE
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={3} textAlign={isWidthUpLg ? "left" : "center"}>
                          <Typography
                          style={{ fontFamily: 'Baskerville ', color: "white" }} 
                            variant={isWidthUpLg ? "h5" : "h6"}
                            color="textSecondary"
                          >
                            Experience the effortless luxury of buying or
                            selling your dream yacht with the guidance of our
                            multilingual team of expert brokers
                          </Typography>
                        </Box>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.extraLargeButton}
                          classes={{ label: classes.extraLargeButtonLabel }}
                          onClick={() => {
                            const footer = document.querySelector("#footer");
                            footer.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          Book consultation now
                        </Button>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={7} order={{ xs: 1, md: 2 }}>
                    <Box display="flex" justifyContent={isWidthUpLg ? "flex-end" : "center"}>
                      <ZoomImage
                        src={`${process.env.PUBLIC_URL}/images/logged_out/yacht.png`}
                        className={classes.image}
                        alt="yacht"
                      />
                    </Box>
                  </Grid>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WaveBorder
        upperColor={theme.palette.secondary.main}
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(HeadSection);