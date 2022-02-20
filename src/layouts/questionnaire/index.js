import * as React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import Header from "../../components/Header/Header";

function Questionnaire() {
  const [slideIn, setSlideIn] = React.useState(true);
  const [slideDirection, setSlideDirection] = React.useState("left");
  const [count, setCount] = React.useState(0);
  const [value, setValue] = React.useState(null);

  const handleChange = () => {
    setSlideDirection("right");
    setSlideIn(false);

    setTimeout(() => {
      setSlideDirection("left");
      setCount(count + 1);
      setSlideIn(true);
    }, 800);
  };

  const handleLastPage = () => {
    setSlideDirection("right");
    setSlideIn(false);

    setTimeout(() => {
      setSlideDirection("left");
      setCount(count + 1);
      setSlideIn(true);
    }, 800);
  };

  // Who are you looking to get help for?
  const icon1 = (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box sx={{ width: 800, height: 500 }}>
        <Grid container spacing={3} direction="column" alignItems="center" justify="center">
          <Grid item xs={12} md={12} lg={12}>
            <Typography align="center" gutterBottom variant="h4" component="div">
              Who are you looking to get help for?
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Myself
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              My Child
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              My Parents
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );

  // Gender
  const icon2 = (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box sx={{ width: 800, height: 500 }}>
        <Grid container spacing={3} direction="column" alignItems="center" justify="center">
          <Grid item xs={12} md={12} lg={12}>
            <Typography align="center" gutterBottom variant="h4" component="div">
              What is your gender
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Male
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Female
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Non-binary
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );

  // Age
  const icon3 = (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box sx={{ width: 800, height: 500 }}>
        <Grid container spacing={3} direction="column" alignItems="center" justify="center">
          <Grid item xs={12} md={12} lg={12}>
            <Typography align="center" gutterBottom variant="h4" component="div">
              When is your birthday?
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            style={{
              position: "absolute",
              left: "50%",
              top: "30%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                label="Birthday"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            style={{
              position: "absolute",
              left: "50%",
              top: "70%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Button
              style={{
                textTransform: "none",
                maxWidth: "200px",
                maxHeight: "50px",
                minWidth: "200px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );

  // Depression1
  const icon4 = (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box sx={{ width: 800, height: 500 }}>
        <Grid container spacing={3} direction="column" alignItems="center" justify="center">
          <Grid item xs={12} md={12} lg={12}>
            <Typography align="center" gutterBottom variant="h4" component="div" display="block">
              Over the last 2 weeks, how often have you had little interest or pleasure in doing
              things?
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Not at all
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Several days
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              More than half the days
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Nearly every day
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );

  // Depression2
  const icon5 = (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box sx={{ width: 800, height: 500 }}>
        <Grid container spacing={3} direction="column" alignItems="center" justify="center">
          <Grid item xs={12} md={12} lg={12}>
            <Typography align="center" gutterBottom variant="h4" component="div" display="block">
              Over the last 2 weeks, how often have you felt down, depressed, or hopeless?
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Not at all
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Several days
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              More than half the days
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Nearly every day
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );

  // Depression2
  const icon6 = (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box sx={{ width: 800, height: 500 }}>
        <Grid container spacing={3} direction="column" alignItems="center" justify="center">
          <Grid item xs={12} md={12} lg={12}>
            <Typography align="center" gutterBottom variant="h4" component="div" display="block">
              Over the last 2 weeks, how often have you had trouble falling or staying asleep, or
              sleeping too much?
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Not at all
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Several days
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              More than half the days
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Nearly every day
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );

  // Depression2
  const icon7 = (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box sx={{ width: 800, height: 500 }}>
        <Grid container spacing={3} direction="column" alignItems="center" justify="center">
          <Grid item xs={12} md={12} lg={12}>
            <Typography align="center" gutterBottom variant="h4" component="div" display="block">
              Over the last 2 weeks, how often have you felt tired or had little energy?
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Not at all
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Several days
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              More than half the days
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Nearly every day
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );

  // Depression2
  const icon8 = (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box sx={{ width: 800, height: 500 }}>
        <Grid container spacing={3} direction="column" alignItems="center" justify="center">
          <Grid item xs={12} md={12} lg={12}>
            <Typography align="center" gutterBottom variant="h4" component="div" display="block">
              Over the last 2 weeks, how often have you had poor appetite or problems with
              overeating?
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Not at all
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Several days
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              More than half the days
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Nearly every day
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );

  // Depression2
  const icon9 = (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box sx={{ width: 800, height: 500 }}>
        <Grid container spacing={3} direction="column" alignItems="center" justify="center">
          <Grid item xs={12} md={12} lg={12}>
            <Typography align="center" gutterBottom variant="h4" component="div" display="block">
              Over the last 2 weeks, how often have you felt bad about yourself or that you are a
              failure or have let yourself or your family down?
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Not at all
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Several days
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              More than half the days
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                textTransform: "none",
                maxWidth: "650px",
                maxHeight: "50px",
                minWidth: "650px",
                minHeight: "50px",
                color: "white",
                backgroundColor: "#17b574",
                fontSize: "20px",
              }}
              variant="contained"
              onClick={handleChange}
            >
              Nearly every day
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );

  // Depression2
  const icon10 = (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box sx={{ width: 800, height: 500 }}>
        <Grid container spacing={3} direction="column" alignItems="center" justify="center">
          <Grid item xs={12} md={12} lg={12}>
            <Typography align="center" gutterBottom variant="h4" component="div" display="block">
              Over the last 2 weeks, how often have you had trouble concentrating on things, such as
              reading the newspaper or watching television?
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <a href="/dashboard">
              <Button
                style={{
                  textTransform: "none",
                  maxWidth: "650px",
                  maxHeight: "50px",
                  minWidth: "650px",
                  minHeight: "50px",
                  color: "white",
                  backgroundColor: "#17b574",
                  fontSize: "20px",
                }}
                variant="contained"
                onClick={handleLastPage}
              >
                Not at all
              </Button>
            </a>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <a href="/dashboard">
              <Button
                style={{
                  textTransform: "none",
                  maxWidth: "650px",
                  maxHeight: "50px",
                  minWidth: "650px",
                  minHeight: "50px",
                  color: "white",
                  backgroundColor: "#17b574",
                  fontSize: "20px",
                }}
                variant="contained"
                onClick={handleLastPage}
              >
                Several days
              </Button>
            </a>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <a href="/dashboard">
              <Button
                style={{
                  textTransform: "none",
                  maxWidth: "650px",
                  maxHeight: "50px",
                  minWidth: "650px",
                  minHeight: "50px",
                  color: "white",
                  backgroundColor: "#17b574",
                  fontSize: "20px",
                }}
                variant="contained"
                onClick={handleLastPage}
              >
                More than half the days
              </Button>
            </a>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <a href="/dashboard">
              <Button
                style={{
                  textTransform: "none",
                  maxWidth: "650px",
                  maxHeight: "50px",
                  minWidth: "650px",
                  minHeight: "50px",
                  color: "white",
                  backgroundColor: "#17b574",
                  fontSize: "20px",
                }}
                variant="contained"
                onClick={handleLastPage}
              >
                Nearly every day
              </Button>
            </a>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );

  const iconArr = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10];

  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <Header />
      <Box
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Box sx={{ width: `calc(800 + 16px)` }}>
          <Slide direction={slideDirection} in={slideIn} timeout={500} mountOnEnter unmountOnExit>
            {iconArr[count % iconArr.length]}
          </Slide>
        </Box>
      </Box>
    </div>
  );
}

export default Questionnaire;
