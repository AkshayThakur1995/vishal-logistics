import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
//img
import headerImg from "../assets/banner.jpg";
window.addEventListener("scroll", function () {
  let parallaxContainer = document.querySelector(".parallax-container");
  let scrollPosition = window.pageYOffset;
  parallaxContainer.style.backgroundPositionY =
    scrollPosition * 0.9 + "px"; /* Adjust the parallax speed */
});
const Header = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(2),
    paddingTop: theme.spacing(10),
    position: "relative",
    overflow: "hidden",
    backgroundImage: `url(${headerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 255, 0.5)",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    zIndex: 0,

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
      zIndex: -1,
      transform: "translateZ(-1px) scale(2)",
    },

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const BoxText = styled(Box)(({ theme }) => ({
    flex: "1",
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flex: "2",
      textAlign: "center",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));

  return (
    <CustomBox component="header" className="parallax-container">
      {/*  Box text  */}
      <BoxText
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",

          maxWidth: "70%",
          "@media (max-width: 600px)": {
            maxWidth: "100%",
          },
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "#fff",
            display: "flex",
            jusifyContent: "center",
            fontSize: "7rem",
            "@media (max-width: 600px)": {
              fontSize: "4rem", // Font size for smaller screens (adjust as needed)
            },
          }}
        >
          Vishal Logistics
        </Typography>

        <Typography
          variant="p"
          component="p"
          sx={{
            py: 3,
            lineHeight: 1.6,
            color: "#fff",
            fontSize: "1.5rem",
            "@media (max-width: 600px)": {
              fontSize: "1rem", // Font size for smaller screens (adjust as needed)
            },
          }}
        >
          We serve as a valuable expansion partner to our clients, offering
          industry-leading shipping services and comprehensive domestic and
          global logistics solutions. With a widespread network spanning across
          the globe, our team of skilled international freight agents and
          experienced freight forwarders guarantees operational excellence and
          delivers the highest level of service quality. We have a strong
          presence at major ports in India and around the world, enabling us to
          efficiently handle shipments across various locations.
        </Typography>
      </BoxText>

      {/* <Box
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            flex: "1",
            paddingTop: "0px",
            alignSelf: "flex-start",
          },
          [theme.breakpoints.up("md")]: {
            flex: "2",
            alignSelf: "flex-end",
          },
        })}
      >
        <img
          src={headerImg}
          alt="headerImg"
          style={{
            width: "100%",
            // marginBottom: -15,
          }}
        />
      </Box> */}
    </CustomBox>
  );
};

export default Header;
