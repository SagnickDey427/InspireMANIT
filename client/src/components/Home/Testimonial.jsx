import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import TestimonialCard from './TestimonialCard';
import { useTheme } from "@emotion/react";

const TESTIMONIALS_DATA = [
  {
    name: "Aditi Sharma",
    role: "Core Member, IKS",
    feedback: "Being part of the Indian Knowledge System event at MANIT changed my perspective on our heritage. The society provides a great platform for growth.",
    image: "https://i.pravatar.cc/150?u=aditi",
    
  },
  {
    name: "Rahul Verma",
    role: "Web Lead",
    feedback: "Working on the WanderLust project was my first real experience with the MERN stack. The mentorship here is top-notch.",
    image: "https://i.pravatar.cc/150?u=rahul",
    
  },
  {
    name: "Ishaan Gupta",
    role: "Alumni",
    feedback: "The networking opportunities I got through this society helped me land my first internship. Truly a community that builds leaders.",
    image: "https://i.pravatar.cc/150?u=ishaan",
  }
];

const Testimonials = () => {
  const theme = useTheme();
  return (
    <Box component="section" sx={{ py: 10, backgroundImage: `radial-gradient(at 0% 0%, ${theme.palette.primary.main}10 0, transparent 50%)` }}>
      <Container>
        <Typography variant="overline" display="block" align="center" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold', letterSpacing: 2 }}>
          Community Voice
        </Typography>
        <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 8 }}>
          What Our Members Say
        </Typography>

        <Grid container spacing={4}>
          {TESTIMONIALS_DATA.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <TestimonialCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;