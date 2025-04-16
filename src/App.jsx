import React, { useState } from 'react'; // Corrected import
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia, // Added CardMedia
  Button,
  Box,
  CssBaseline,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './AppAppBar'; // Changed from named import { AppAppBar }
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Example Icon
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import afrutkin from './assets/afrutkin.jpeg';
import jfrutkin from './assets/jfrutkin.jpeg';
import efrutkin from './assets/efrutkin.jpeg';
import rfrutkin from './assets/rfrutkin.jpeg';
import sfrutkin from './assets/sfrutkin.jpg';

// Placeholder data - replace with actual data and images
const people = [
  {
    name: 'Jonathan Frutkin',
    title: 'Co-Managing Partner, BLSQ Management',
    location: 'Boca Raton, FL & Medellin, Colombia',
    linkedin: 'https://www.linkedin.com/in/frutkinlaw',
    image: jfrutkin, // Updated path for public folder
  },
  {
    name: 'Elliott Frutkin',
    title: 'Experienced Technology Professional',
    location: 'San Jose, CA',
    linkedin: 'https://www.linkedin.com/in/frutkin/',
    image: efrutkin, // Updated path for public folder
  },
  {
    name: 'Rachel Frutkin Beachler',
    title: 'Personal Trainer, Running on Happy / Asst Track Coach',
    location: 'Cleveland, OH',
    linkedin: 'https://www.linkedin.com/in/rfrutkin',
    image: rfrutkin, // Updated path for public folder
  },
  {
    name: 'Alexander Frutkin',
    title: 'Frontend Developer, Frutkin.com',
    location: 'Irvine, California',
    linkedin: 'https://www.linkedin.com/in/alex-frutkin-63804597/',
    image: afrutkin, // Updated path for public folder
  },
  {
    name: 'Samuel Frutkin',
    title: 'Discord Moderator',
    location: 'Boca Raton, FL',
    linkedin: 'https://www.linkedin.com/in/samuel-frutkin-316730311/',
    image: sfrutkin, // Updated path for public folder
  },
];

const services = [
  'Technology',
  'Entrepreneurship',
  'Fitness',
  'Estate Planning',
  'Real Estate Buyers & Sellers',
  'Bankruptcy / Restructuring',
  'Websites',
  'Tutoring'
];

// Basic Card component for reuse
function PersonCard({ person }) {
  return (
    <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Use CardMedia to display the image */}
      <CardMedia
        component="img"
        height="340" // Adjust height as needed
        image={person.image}
        alt={person.name}
        sx={{ objectFit: 'cover' }} // Optional: control how the image fits
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {person.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {person.title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {person.location}
        </Typography>
      </CardContent>
      <CardActions>
        {person.linkedin && (
          <Button
            size="small"
            href={person.linkedin}
            target="_blank"
            startIcon={<LinkedInIcon />}
          >
            LinkedIn
          </Button>
        )}
        {person.article && (
           <Button size="small" href={person.article} target="_blank">
             Retirement Article
           </Button>
        )}
         {/* Add other links if needed */}
      </CardActions>
    </Card>
  );
}


function App() {
  const [mode, setMode] = useState(() => {
    // Check localStorage first
    const localMode = localStorage.getItem('mode');
    if (localMode) return localMode;
    // Default to system preference if no localStorage value
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('mode', newMode); // Save the new mode to localStorage
      // Theme saving to Firestore is now handled in AppAppBar based on activeUser
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={createTheme({ palette: { mode } })}>
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      {/* Basic AppBar */}
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />

      {/* Main Content Area - Add flexGrow: 1 */}
      <Container maxWidth="lg" sx={{ mt: 16, mb: 4, flexGrow: 1 }}>
        {/* Welcome Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Welcome to FRUTKIN.COM
          </Typography>
          <Typography variant="body1">
            If you've landed here, you are probably looking for one of the following services or people:
          </Typography>
        </Box>

        {/* People Grid */}
        <Grid container spacing={4} sx={{ display: 'flex', alignItems: 'stretch' }}>
          {people.map((person) => (
            // Group responsive props under the 'size' prop
            <Grid key={person.name} size={{ xs: 12, sm: 6, md: 4 }}>
              <PersonCard person={person} />
            </Grid>
          ))}

           {/* Services Section - Placed in the grid for layout */}
           {/* Group responsive props under the 'size' prop */}
           <Grid size={{ xs: 12, sm: 6, md: 4 }}>
             <Card sx={{ width: '100%', height: '100%' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>SERVICES</Typography>
                    <List dense>
                        {services.map((service) => (
                            <ListItem key={service} disablePadding>
                                <ListItemText primary={`• ${service}`} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
             </Card>
           </Grid>
        </Grid>

         {/* Contact Prompt */}
         <Box sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
           <Typography variant="h6">
             Please use the links to be in touch with us - we would love to hear from you.
           </Typography>
         </Box>

      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: 'background.paper', p: 2, mt: 'auto', textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary">
            Turtle Icon by Econceptive from the Noun Project
          </Typography>
          {/* Add other footer content if needed */}
        </Container>
      </Box>
    </Box>
    </ThemeProvider>
  );
}

export default App;
