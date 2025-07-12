import _Timeline from "../_Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import { _Fullname, _Subinfo } from "../_Typography";
import Link from "@mui/material/Link";
import { links } from "@/data/links";

export default function UiSocialLinks() {
  return (
    <_Timeline>
      {links.map((link) => (
        <TimelineItem key={link.name}>
          <TimelineSeparator>
            <TimelineConnector />
            {link.icon}
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Link
              href={link.url}
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
              color={link.linkColor}
            >
              <_Fullname>{link.name}</_Fullname>
              <_Subinfo>{link.subinfo}</_Subinfo>
            </Link>
          </TimelineContent>
        </TimelineItem>
      ))}
    </_Timeline>
  );
}
