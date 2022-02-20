import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import MDTypography from "components/MDTypography";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Dr. Ralph Richards",
    type: "Psychiatrist",
    Appointment: "Upcoming Appointment: Tuesday, February 22 at 10:00AM",
    imgPath:
      "https://images.pexels.com/photos/2182979/pexels-photo-2182979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    label: "Dr. Jaime L. Gutierrez",
    type: "Dermatologist",
    Appointment: "No upcoming appointments at this time",
    imgPath:
      "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    label: "Dr. Bali Indonesia",
    type: "Family Doctor",
    Appointment: "Upcoming Appointment: Wednesday, April 6 at 1:00 PM",
    imgPath:
      "https://media.istockphoto.com/photos/we-offer-our-patients-premium-healthcare-here-picture-id638647058?k=20&m=638647058&s=612x612&w=0&h=aRF56ZIBXBL1wN45ZRaHkhmjJjIahkmXTYki7wQteJQ=",
  },
  {
    label: "Dr. Clara W. Valerio",
    type: "Cardiologist",
    Appointment: "No upcoming appointments at this time",
    imgPath:
      "https://media.istockphoto.com/photos/doctor-holding-digital-tablet-at-meeting-room-picture-id1189304032?k=20&m=1189304032&s=612x612&w=0&h=ovTNnR0JX2cRZkzMBed9exRO_PamZLlysLDFkXesr4Q=",
  },
];

export default function Doctors() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Card sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          m: 1,
          pl: 2,
        }}
      >
        <MDTypography variant="h5">{images[activeStep].label}</MDTypography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: "block",
                  maxWidth: 400,
                  overflow: "hidden",
                  width: "100%",
                  mx: "auto",
                  boxShadow: 2,
                  borderRadius: 8,
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MDTypography sx={{ m: "10px", mx: "auto" }} variant="h6">
        {images[activeStep].type}
      </MDTypography>
      <MDTypography sx={{ m: "8px", mx: "auto" }} variant="h6">
        {images[activeStep].Appointment}
      </MDTypography>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </Card>
  );
}
