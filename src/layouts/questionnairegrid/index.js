import React from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import Header from "../../components/Header/Header";

function QuestionnaireGrid() {
  return (
    <Box>
      <Header />
      <Box sx={{ m: 2 }}>
        <Grid item xs={12} md={12} lg={12}>
          <MDBox>
            <Card variant="outlined">
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Our 4 step process
                </Typography>
                <Grid item xs={12} md={12} lg={12}>
                  <MDBox mt={4.5} ml={3.5}>
                    <Grid container spacing={18}>
                      <Grid item xs={3} md={3} lg={3}>
                        <CardMedia
                          component="img"
                          height="180"
                          image="/images/grid_images/undraw_information_tab_re_f0w3.svg"
                          alt="questionnaire"
                        />
                        <Typography gutterBottom variant="h4" component="div">
                          1. Fill out questionnaire so that the doctor gets a better idea of who you
                          are.
                        </Typography>
                      </Grid>
                      <Grid item xs={3} md={3} lg={3}>
                        <CardMedia
                          component="img"
                          height="180"
                          image="/images/grid_images/undraw_connection_re_lcud.svg"
                          alt="match"
                        />
                        <Typography gutterBottom variant="h4" component="div">
                          2. Get matched with a doctor who will understand your needs.
                        </Typography>
                      </Grid>
                      <Grid item xs={3} md={3} lg={3}>
                        <CardMedia
                          component="img"
                          height="180"
                          image="/images/grid_images/undraw_jogging_re_k28i.svg"
                          alt="treatment"
                        />
                        <Typography gutterBottom variant="h4" component="div">
                          3. Receive treatment plan and medication from the doctor
                        </Typography>
                      </Grid>
                      <Grid item xs={3} md={3} lg={3}>
                        <CardMedia
                          component="img"
                          height="180"
                          image="/images/grid_images/undraw_winners_re_wr1l.svg"
                          alt="contact"
                        />
                        <Typography gutterBottom variant="h4" component="div">
                          4. Get in touch with an accountability partner.
                        </Typography>
                      </Grid>
                    </Grid>
                  </MDBox>
                </Grid>
              </CardContent>
              <CardActions>
                <Button size="small">Learn more</Button>
              </CardActions>
            </Card>
          </MDBox>
        </Grid>
        <MDBox mt={4.5}>
          <Typography variant="h2">
            What would you like to speak to a specialist about today?
          </Typography>
          <Typography variant="h5">
            Recieve specialized care and treatment from our professionals from the comfort of your
            own home.
          </Typography>
        </MDBox>
        <Grid item xs={12} md={12} lg={12}>
          <MDBox mt={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={3}>
                <Card variant="outlined">
                  <CardMedia
                    component="img"
                    height="180"
                    image="/images/grid_images/stress.jpg"
                    alt="stress"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Stress
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href="questionnaire">
                      <Button size="small">Select</Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Card variant="outlined">
                  <CardMedia
                    component="img"
                    height="180"
                    image="/images/grid_images/depression.jpeg"
                    alt="depression"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Depression
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href="questionnaire">
                      <Button size="small">Select</Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Card variant="outlined">
                  <CardMedia
                    component="img"
                    height="180"
                    image="/images/grid_images/anxiety.jpeg"
                    alt="anxiety"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Anxiety
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href="questionnaire">
                      <Button size="small">Select</Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Card variant="outlined">
                  <CardMedia
                    component="img"
                    height="180"
                    image="/images/grid_images/pain.jpg"
                    alt="pain"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Pain
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href="questionnaire">
                      <Button size="small">Select</Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </MDBox>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <MDBox mt={4.5}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={3}>
                <Card variant="outlined">
                  <CardMedia
                    component="img"
                    height="180"
                    image="/images/grid_images/highbloodpressure.jpg"
                    alt="highbloodpressure"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      High Blood Pressure
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href="questionnaire">
                      <Button size="small">Select</Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Card variant="outlined">
                  <CardMedia
                    component="img"
                    height="180"
                    image="/images/grid_images/washingface.jpeg"
                    alt="washingface"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Dermatology Questions
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href="questionnaire">
                      <Button size="small">Select</Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Card variant="outlined">
                  <CardMedia
                    component="img"
                    height="180"
                    image="/images/grid_images/sprain.jpg"
                    alt="sprain"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Joint Injuries
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href="questionnaire">
                      <Button size="small">Select</Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Card variant="outlined">
                  <CardMedia
                    component="img"
                    height="180"
                    image="/images/grid_images/other.jpg"
                    alt="other"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Other Questions
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href="questionnaire">
                      <Button size="small">Select</Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </MDBox>
        </Grid>
      </Box>
    </Box>
  );
}

export default QuestionnaireGrid;
