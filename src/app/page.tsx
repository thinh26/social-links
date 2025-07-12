import UiBody from "@/components/ui/UIBody";
import UiHeader from "@/components/ui/UiHeader";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";

export default function Home() {
  return (
    <Card className="h-dvh p-5">
      <Grid container>
        <Grid size={12} className="h-1/4">
          <UiHeader />
        </Grid>
        <Grid size={12}>
          <UiBody />
        </Grid>
      </Grid>
    </Card>
  );
}
