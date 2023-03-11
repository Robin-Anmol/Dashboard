import React from "react";

import { GeoChart, Header } from "../../components";
import { Box, colors } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../../Themes";
const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]} `}
        borderRadius={"4px"}
      >
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Geography;
