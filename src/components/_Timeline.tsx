import Timeline from "@mui/lab/Timeline";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { PropsWithChildren } from "react";

const _Timeline = ({ children }: PropsWithChildren) => {
  return (
    <Timeline
      position="right"
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {children}
    </Timeline>
  );
};

export default _Timeline;
