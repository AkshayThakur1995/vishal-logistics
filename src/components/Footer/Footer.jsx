import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const StackColumn = styled(Stack)(() => ({
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    gap: 8,
    textAlign: "center",
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ededed",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: 30,
    },
  }));

  return (
    <BoxRow
      component="footer"
      sx={{
        py: 4,
        px: 2,
      }}
    >
      <StackColumn>
        <FooterTitle text={"address"} />
        <FooterLink
          text={
            <span>
              <strong>Regd. Office-</strong> 2nd Floor House No.54 gali Number
              7, Harit Vihar, 110084
            </span>
          }
        />
        <FooterLink
          text={"B-73/73, 2nd Flr., Rohit House, Vishwakarma Colony, Mb Road New delhi-44"}
        />
        <FooterLink text={"+918700810423"} />
        <FooterLink text={"kesar1965thakur@gmail.com"} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={"Services"} />
        <FooterLink text={"AIR FREIGHT"} />
        <FooterLink text={"DOOR-TO-DOOR LOGISTICS"} />
        <FooterLink text={"OCEAN FREIGHT"} />
        <FooterLink text={"CUSTOM CLEARANCE"} />
      </StackColumn>
      <StackColumn>
        <FooterTitle text={"our company"} />

        <FooterLink text={"Vishal Logistics"} />
      </StackColumn>
    </BoxRow>
  );
};

export default Footer;
