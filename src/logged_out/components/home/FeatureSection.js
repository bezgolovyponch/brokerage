import React from "react";
import { Grid, /* Typography  */} from "@mui/material";
// import CodeIcon from "@mui/icons-material/Code";
// import BuildIcon from "@mui/icons-material/Build";
// import ComputerIcon from "@mui/icons-material/Computer";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import CloudIcon from "@mui/icons-material/Cloud";
// import MeassageIcon from "@mui/icons-material/Message";
// import CancelIcon from "@mui/icons-material/Cancel";
import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";
import FeatureCard from "./FeatureCard";
import useWidth from "../../../shared/functions/useWidth";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ExploreIcon from "@mui/icons-material/Explore";
import EventNoteIcon from "@mui/icons-material/EventNote";

const iconSize = 80;

const features = [
  {
    color: "#121F32",

    headline: "Yacht Sales",
    font: "Bodoni",
    text: " Bespoke yacht sales services, catering to your specific needs and preferences. We specialize in high-end yachts and work with you to find the perfect vessel for your lifestyle and taste.",
    icon: <HandshakeIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#121F32",
    headline: "Yacht Management",
    font: "Bodoni",
    text: "Maintenance, crew management, and financial services. We offer personalized attention and ensure that your yacht is always maintained to the highest standards.",
    icon: <ExploreIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#121F32",
    headline: "Charter Management",
    font: "Bodoni",
    text: " We handle all aspects of marketing, booking, and managing your yacht's charter. We provide top-notch service and attention to detail, ensuring your guests have an unforgettable experience.",
    icon: <EventNoteIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },
  /*   {
    color: "#d50000",
    headline: "Feature 4",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    icon: <ComputerIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200",
  },
  {
    color: "#DD2C00",
    headline: "Feature 5",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    icon: <BarChartIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0",
  },
  {
    color: "#64DD17",
    headline: "Feature 6",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200",
  },
  {
    color: "#304FFE",
    headline: "Feature 7",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    icon: <CloudIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#C51162",
    headline: "Feature 8",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    icon: <CodeIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#00B8D4",
    headline: "Feature 9",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    icon: <CancelIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  }, */
];

function FeatureSection(props) {
  const { theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid">
        {/* <Typography variant="h3" align="center" className="lg-mg-bottom" style={{ fontFamily: 'Bodoni '}}>
          Specializations
        </Typography> */}
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width, theme)} style={{marginTop: "0"}}>
            {features.map((element) => (
              <Grid
                item
                xs={12}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={isWidthUpMd ? element.mdDelay : element.smDelay}
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {};

export default withTheme(FeatureSection);
