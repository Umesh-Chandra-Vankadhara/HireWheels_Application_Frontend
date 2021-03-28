import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(0),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Pick UP", "Drop Off", "Available Vehicles", "Confirm Booking"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Select Pick Up Date";
    case 1:
      return "Select Drop Off Date";
    case 2:
      return "Select Vehicle Type of Your Wish ";
    case 3:
      return "Proceed to confirm booking";
    default:
      return "Unknown step";
  }
}

function Booking() {
  const classNames = useStyles();
  const [activeStep, setActiveStep] =useState(0);
  const steps = getSteps();


  const handleNext = () => {
     setActiveStep((prevActiveStep) => prevActiveStep + 1);
   
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
 const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="booking">
        <div className={classNames.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography  className={classNames.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classNames.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classNames.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classNames.button}
              >
                Back
              </Button>
             <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classNames.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  
  );
}

export default Booking;
