"use client";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Image } from '@/app/type';
import { Button, MobileStepper, useTheme } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { C_BASE_API_URL } from '@/utils/env/env';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface MainFeaturedPostProps {
  post: {
    description: string;
    images: Image[];
    imageText: string;
    linkText: string;
    title: string;
  };
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
  const { post } = props;

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = post.images ? post.images.length : 0;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        mt: 2,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // backgroundImage: `url(${post.images})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {/* <img src={post.images[0].path} alt={post.imageText} /> */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {post.images && post.images.length > 0 && post.images.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 285,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={`${C_BASE_API_URL}/${step.path.replaceAll('public', 'storage')}`}
                alt={`${C_BASE_API_URL}/${step.path.replaceAll('public', 'storage')}`}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Paper>
  );
}
