import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import TimelineDot from "@mui/lab/TimelineDot";
import { LinkProps } from "@mui/material";

export const links: Array<
  Partial<{
    icon: React.ReactNode;
    name: string;
    subinfo: string;
    url: string;
    linkColor: LinkProps["color"];
  }>
> = [
  {
    icon: (
      <TimelineDot color="primary">
        <FacebookIcon />
      </TimelineDot>
    ),
    name: "Facebook",
    subinfo: "Nguyễn Đức Thịnh",
    url: "https://facebook.com/Th1nh26",
    linkColor: "primary",
  },
  {
    icon: (
      <TimelineDot color="error">
        <InstagramIcon />
      </TimelineDot>
    ),
    name: "Instagram",
    subinfo: "@thinh26",
    url: "https://instagram.com/thinh26",
    linkColor: "error",
  },
  {
    icon: (
      <TimelineDot sx={{ backgroundColor: "black" }}>
        <XIcon />
      </TimelineDot>
    ),
    name: "X",
    subinfo: "@thinh26",
    url: "https://x.com/thinh26",
    linkColor: "black",
  },
];
