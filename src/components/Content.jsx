import React from "react";
import { Grid, Typography, IconButton, Card, CardContent } from "@mui/material";
// icons
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import SailingIcon from "@mui/icons-material/Sailing";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import WifiPasswordIcon from "@mui/icons-material/WifiPassword";
// components
import Title from "./Title";
import Paragraph from "./Paragraph";

const Content = () => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        py: 10,
        px: 2,
      }}
    >
      <Grid item xs={12} sm={12} md={10} component="section">
        <Title text={"What we are offering?"} textAlign={"center"} />

        <Typography
          variant="h6"
          component="h4"
          sx={{
            fontWeight: "400",
            paddingTop: 1,
          }}
          textAlign={"center"}
        >
          Logictics Facilities
        </Typography>

        <Paragraph
          text={
            " We Povide best services\
              to our customers."
          }
          //   maxWidth={"75%"}
          mx={0}
          textAlign={"center"}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          sx={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          <CardContent>
            <IconButton>
              <ConnectingAirportsIcon fontSize="large" color="secondary" />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              AIR FREIGHT
              <br />
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          sx={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          <CardContent>
            <IconButton>
              <LocalShippingIcon fontSize="large" color="secondary" />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              DOOR-TO-DOOR LOGISTICS
              <br />
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          sx={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          <CardContent>
            <IconButton>
              <SailingIcon fontSize="large" color="secondary" />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              OCEAN FREIGHT
              <br />
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          sx={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          <CardContent>
            <IconButton>
              <PrecisionManufacturingIcon fontSize="large" color="secondary" />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              CUSTOM CLEARANCE
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Content;
