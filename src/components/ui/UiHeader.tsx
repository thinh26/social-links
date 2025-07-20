import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import _Avatar from "@/components/_Avatar";
import { _Fullname, _Subinfo } from "@/components/_Typography";
import React from "react";
import _Chip from "../_Chip";
import Chips from "@/data/chips";
import Avatar from "@/assets/Avatar.jpg";

export default function UiHeader(): React.ReactNode {
  return (
    <Grid container className="mb-4">
      <Grid size={4}>
        <_Avatar alt="Avatar" src={Avatar.src} slotProps={{
            root: {
                "aria-label": "Avatar",
            }
        }} />
      </Grid>
      <Grid size={8} className="p-3">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="left"
          className="h-full"
          sx={{ gap: "5px" }}
        >
          <_Fullname aria-label="fullname">Nguyễn Đức Thịnh</_Fullname>
          <_Subinfo aria-label="username">@thinh26</_Subinfo>
          <Stack direction="row" alignItems="center">
            <LocationOnIcon sx={{ color: "gray", fontSize: "15px" }} aria-label="locationIcon" />
            <_Subinfo aria-label="hometown">Nha Trang, Khánh Hòa, Việt Nam</_Subinfo>
          </Stack>
          <Stack direction="row" gap={1}>
            {Chips.map((label) => (
              <_Chip key={label} label={label} aria-label={label}/>
            ))}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}
