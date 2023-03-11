import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../Themes";

const Header = ({ Title, Subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        sx={{ m: "0 0 5px 0" }}
        fontWeight={"bold"}
      >
        {Title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {Subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
