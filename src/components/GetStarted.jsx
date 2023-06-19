import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import Title from "./Title";
// img
import imgDetail from "../assets/ocean.jpg";
import door from "../assets/door.jpg";
import imgDetail2 from "../assets/custom.jpg";

const GetStarted = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1.5rem",
  });

  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop: "1rem" }}>Our Services</h1>
      <Grid
        container
        spacing={{ xs: 4, sm: 4, md: 0 }}
        sx={{
          pt: 10,
          px: 2,
        }}
      >
        <CustomGridItem item xs={12} sm={8} md={6} component="section">
          <Box
            component="article"
            sx={{
              px: 4,
            }}
          >
            <Title text={"OCEAN FREIGHT"} textAlign={"start"} />
            <CustomTypography>
              At our company, we offer top-notch ocean freight shipping services
              that cater to various needs. Our services include both Full
              Container Load (FCL) and Less than Container Load (LCL) options,
              ensuring flexibility for our clients. Additionally, we specialize
              in handling Oversized & Project Cargo, Breakbulk shipments, as
              well as Dangerous Goods. We also provide services such as Buyer's
              Consolidation, Transport Insurance, and more. Our comprehensive
              ocean freight shipping services cover the entire process of
              transporting goods by sea. By understanding our clients'
              requirements, we strive to find the optimal balance between time
              and cost. With our expertise and a wide range of shipping options,
              we ensure that our clients receive the best solutions for their
              specific Ocean Freight shipping needs.
            </CustomTypography>
          </Box>
        </CustomGridItem>

        <Grid item xs={12} sm={4} md={6}>
          <img
            src={imgDetail}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={6}
          sx={{
            order: { xs: 4, sm: 4, md: 3 },
          }}
        >
          <img
            src={imgDetail2}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Grid>

        <CustomGridItem
          item
          xs={12}
          sm={8}
          md={6}
          sx={{
            order: { xs: 3, sm: 3, md: 4 },
          }}
        >
          <Box
            component="article"
            sx={{
              px: 4,
            }}
          >
            <Title text={"Custom Clearence"} textAlign={"start"} />
            <CustomTypography>
              We offer a range of services related to export customs clearance
              and handling of goods.
              <br /> Our specific services include:
              <ul>
                <li>Documentation for custom clearance</li>
                <li>Carting / Receiving Goods</li>
                <li>Examination of Shipments</li>
                <li>
                  Registration of contracts with customs for project clearance
                </li>
                <li>
                  Customs clearance of the import cargo at the port of entry
                </li>
                <li>Reconciliation of contracts after completion of import</li>
                <li>
                  Port handling and arranging bonded warehouse as and when
                  required by the client
                </li>
                <li>
                  Consultation on documents like invoice and packing list for
                  compatibility with appropriate customs compliance
                </li>
                <li>
                  Classification in customs for minimum duty and easy clearance
                </li>
                <li>
                  Suggestion for effective packing for economic handling and
                  safety
                </li>
                <li>
                  Handling of stuffing & de-stuffing at Ports, ICD's and
                  Customer’s warehouse
                </li>
              </ul>
            </CustomTypography>
          </Box>
        </CustomGridItem>
      </Grid>
      <Grid
        container
        spacing={{ xs: 4, sm: 4, md: 0 }}
        sx={{
          px: 2,
        }}
      >
        <CustomGridItem item xs={12} sm={8} md={6} component="section">
          <Box
            component="article"
            sx={{
              px: 4,
            }}
          >
            <Title text={"DOOR-TO-DOOR LOGISTICS"} textAlign={"start"} />
            <CustomTypography>
              We offer comprehensive Door-to-Door services that cater to the
              needs of our clients.
              <ul>
                <li>
                  Port-to-door and door-to-door service from shipper to
                  consignee
                </li>
                <li>Shipments of virtually any size or weight</li>
                <li>Facilitate custom clearance</li>
                <li>
                  Fast and reliable transit times, including earliest deliveries
                  and latest pickups in key major metros
                </li>
              </ul>
            </CustomTypography>
          </Box>
        </CustomGridItem>

        <Grid item xs={12} sm={4} md={6}>
          <img
            src={door}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={6}
          sx={{
            order: { xs: 4, sm: 4, md: 3 },
          }}
        ></Grid>
      </Grid>
    </>
  );
};

export default GetStarted;
