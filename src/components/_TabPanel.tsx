import React from "react";
import Box from "@mui/material/Box";

const _TabPanel = ({ children, value, index, ...other }: Props.TabPanel) => {
  return (
    <Box
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
};

export default _TabPanel;
