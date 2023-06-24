import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";

const Details = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      phone: data.get("phone"),
    });
  };

  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <Title text={"Let us serve you"} textAlign={"center"} />
      <Paragraph
        text={"If you are interested contact us on these numbers"}
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />

      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          mt: 1,
          py: 2,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Email: kesar1965thakur@gmail.com
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Contact: +91 84700810423
        </Typography>
      </Box>
    </Stack>
  );
};

export default Details;
