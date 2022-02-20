import { Steps, StepsProvider, useSteps } from "react-step-builder";
// Material Dashboard 2 React example components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
<<<<<<< Updated upstream
import Header from "../../components/Header/Header";

function Questionnaire() {
  return (
    <div>
      <Header />
      <StepsProvider>
        <MySteps />
      </StepsProvider>
    </div>
=======
import ButtonGroup from "@mui/material/ButtonGroup";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import Box from "@mui/material/Box";

// @mui material components
import Grid from "@mui/material/Grid";
import CheckboxList from "./component/list";

import BasicSelect from "./component/select";

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];

function Questionnaire() {
  return (
    <StepsProvider>
      <MySteps />
    </StepsProvider>
>>>>>>> Stashed changes
  );
}

function MySteps() {
  const { next, prev, total, current, progress } = useSteps();

  return (
    <MDBox display="flex" justifyContent="center" alignItems="center" mt={6} mb={3}>
      <Grid container xs={12} md={8} lg={8}>
        <Card>
          <Steps>
            <Grid container display="flex" justifyContent="center">
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
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                  ranging across all continents except Antarctica
                </Typography>
                <Box sx={{ mx: "auto" }}>
                  <BasicSelect />
                </Box>
              </CardContent>
            </Grid>
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
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                  ranging across all continents except Antarctica
                </Typography>
                <Box sx={{ mx: "auto" }}>
                  <CheckboxList />
                </Box>
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
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                  ranging across all continents except Antarctica
                </Typography>
                <Box sx={{ alignItems: "center", mx: "auto" }}>
                  <ButtonGroup orientation="vertical" aria-label="vertical outlined button group">
                    {buttons}
                  </ButtonGroup>
                </Box>
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
      </Grid>
    </MDBox>
  );
}

export default Questionnaire;
