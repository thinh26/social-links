import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function UiAboutMe() {
  return (
    <Box component="div" className="p-3">
      <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>Hi,</Typography>
      <Typography sx={{ fontSize: "16px", textAlign: "justify" }}>
        I&#39;m Duc Thinh — just an ordinary person living among many others.
        There may not be much to say on the surface, but if you spend time with
        me in real life, you&#39;ll notice I&#39;m friendly, independent,
        open-minded, reliable, family-oriented, and — of course — a little
        clumsy (haha).
      </Typography>
    </Box>
  );
}
