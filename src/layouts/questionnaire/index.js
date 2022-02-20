import { Steps, StepsProvider, useSteps } from "react-step-builder";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";

function Questionnaire() {
  return (
    <DashboardLayout>
      <StepsProvider>
        <MySteps />
      </StepsProvider>
    </DashboardLayout>
  );
}

function MySteps() {
  const { next, prev, total, current, progress } = useSteps();

  return (
    <Card>
      <Steps>
        <div>
          <CardMedia
            component="img"
            height="140"
            image="/images/grid_images/undraw_information_tab_re_f0w3.svg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </div>
        <div>
          <CardMedia
            component="img"
            height="140"
            image="/images/grid_images/undraw_information_tab_re_f0w3.svg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </div>
        <div>
          <CardMedia
            component="img"
            height="140"
            image="/images/grid_images/undraw_information_tab_re_f0w3.svg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </div>
      </Steps>
      <CardActions>
        <Button variant="contained" type="button" onClick={prev}>
          Prev
        </Button>
        <Button variant="contained" type="button" onClick={next}>
          Next
        </Button>
      </CardActions>
      <div className="steps_data">
        <div>Total Steps: {total}</div>
        <div>Current Step: {current}</div>
        <div>Progress: {progress * 100}%</div>
      </div>
    </Card>
  );
}

export default Questionnaire;
