import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Heading = ({ text }) => {
  return (
    <Typography component="div">
      <Box fontWeight={100} textAlign="center" fontSize="h3.fontSize" m={1}>
        {text}
      </Box>
    </Typography>
  );
};

export default Heading;
