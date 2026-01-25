import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import EventCard from './EventCard'; // Importing your modular component

const UPCOMING_DATA = [
  {
    title: "IKS Cultural Debate",
    date: "Feb 15, 2026",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
    description: "Exploring the depths of Indian Knowledge Systems in modern education at MANIT.",
  },
  {
    title: "Tech-Srijan Hackathon",
    date: "March 02, 2026",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    description: "A 24-hour sprint to build solutions for sustainable living and smart cities.",
  }
];

const UpcomingEvents = () => {
  return (
    <Box component="section" sx={{ py: 10, backgroundColor: '#f9f9f9' }}>
      <Container>
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ fontWeight: 800, mb: 2, color: '#1a1a1a' }}
        >
          What's Happening
        </Typography>
        <Typography 
          variant="body1" 
          align="center" 
          sx={{ mb: 8, color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}
        >
          Stay updated with the latest workshops, competitions, and cultural meets in our society.
        </Typography>

        <Grid container spacing={4}>
          {UPCOMING_DATA.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {/* Integrating the Card here */}
              <EventCard 
                title={event.title}
                date={event.date}
                image={event.image}
                description={event.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default UpcomingEvents;