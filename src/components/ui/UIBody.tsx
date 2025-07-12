"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import _TabPanel from "../_TabPanel";
import { mapTabPanelItem } from "@/utils";
import UiSocialLinks from "@/components/ui/UiSocialLinks";
import UiAboutMe from "@/components/ui/UiAboutMe";

export default function UiBody(): React.ReactNode {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Social links" {...mapTabPanelItem(0)} />
          <Tab label="About me" {...mapTabPanelItem(1)} />
        </Tabs>
      </Box>
      <_TabPanel value={value} index={0}>
        {/* Social link */}
        <UiSocialLinks />
      </_TabPanel>
      <_TabPanel value={value} index={1}>
        <UiAboutMe />
      </_TabPanel>
    </Box>
  );
}
