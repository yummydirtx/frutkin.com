import React, { useState } from 'react';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Box,
  CssBaseline,
  Chip,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './AppAppBar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebIcon from '@mui/icons-material/Web';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import afrutkin from './assets/afrutkin.jpeg';
import jfrutkin from './assets/jfrutkin.jpeg';
import efrutkin from './assets/efrutkin.jpeg';
import rfrutkin from './assets/rfrutkin.jpeg';
import sfrutkin from './assets/sfrutkin.jpg';
import Footer from './Footer';

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
    name: 'Rachel Frutkin',
    title: 'Personal Trainer, Running on Happy / Head Track Coach',
    location: 'Cleveland, OH',
    linkedin: 'https://www.linkedin.com/in/rfrutkin',
    image: rfrutkin, // Updated path for public folder
  },
  {
    name: 'Alex Frutkin',
    title: 'Frontend Developer, Frutkin.com',
    location: 'Irvine, CA',
    linkedin: 'https://www.linkedin.com/in/alex-frutkin-63804597/',
    website: 'https://thejunkyard.dev/',
    image: afrutkin, // Updated path for public folder
  },
  {
    name: 'Samuel Frutkin',
    title: 'Community Developer',
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

// Basic Card component with modern design
function PersonCard({ person }) {
  return (
    <Card 
      sx={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: (theme) => 
            theme.palette.mode === 'light'
              ? '0 12px 40px rgba(0,0,0,0.12)'
              : '0 12px 40px rgba(0,0,0,0.4)',
        },
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden', paddingTop: '100%' }}>
        <CardMedia
          component="img"
          image={person.image}
          alt={person.name}
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, pt: 3, pb: 2 }}>
        <Typography 
          gutterBottom 
          variant="h5" 
          component="div"
          sx={{ 
            fontWeight: 700,
            mb: 1,
            lineHeight: 1.3,
          }}
        >
          {person.name}
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ 
            mb: 1.5,
            fontWeight: 500,
            lineHeight: 1.6,
          }}
        >
          {person.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <LocationOnIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
          <Typography variant="caption" color="text.secondary">
            {person.location}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2.5 }}>
        {person.linkedin && (
          <Button
            size="medium"
            variant="outlined"
            href={person.linkedin}
            target="_blank"
            startIcon={<LinkedInIcon />}
            sx={{ 
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
            }}
          >
            LinkedIn
          </Button>
        )}
        {person.article && (
          <Button 
            size="medium" 
            variant="outlined"
            href={person.article} 
            target="_blank"
            sx={{ 
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
            }}
          >
            Article
          </Button>
        )}
        {person.website && (
          <Button
            size="medium"
            variant="outlined"
            href={person.website}
            target="_blank"
            startIcon={<WebIcon />}
            sx={{ 
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
            }}
          >
            Website
          </Button>
        )}
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
      localStorage.setItem('mode', newMode);
      return newMode;
    });
  };

  // Create a modern theme with enhanced typography and colors
  const theme = createTheme({
    palette: { 
      mode,
      primary: {
        main: mode === 'light' ? '#1976d2' : '#90caf9',
      },
      secondary: {
        main: mode === 'light' ? '#dc004e' : '#f48fb1',
      },
      background: {
        default: mode === 'light' ? '#fafafa' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
      },
    },
    typography: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      h1: {
        fontWeight: 800,
        letterSpacing: '-0.02em',
      },
      h4: {
        fontWeight: 700,
        letterSpacing: '-0.01em',
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
      body1: {
        fontSize: '1.125rem',
        lineHeight: 1.7,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 600,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CssBaseline />
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />

        {/* Main Content Area */}
        <Container maxWidth="lg" sx={{ mt: { xs: 14, md: 16 }, mb: 8, flexGrow: 1 }}>
          {/* Hero Section with modern gradient */}
          <Box 
            sx={{ 
              textAlign: 'center', 
              mb: 8,
              mt: { xs: 4, md: 6 },
            }}
          >
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                background: (theme) => 
                  theme.palette.mode === 'light'
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : 'linear-gradient(135deg, #90caf9 0%, #ce93d8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mb: 3,
              }}
            >
              Welcome to FRUTKIN.COM
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary"
              sx={{ 
                maxWidth: '800px',
                mx: 'auto',
                fontWeight: 400,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.8,
              }}
            >
              Connecting you with expertise across technology, law, fitness, and entrepreneurship.
              <br />
              If you've landed here, you are probably looking for one of the following services or people:
            </Typography>
          </Box>

          {/* People Grid */}
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {people.map((person) => (
              <Grid key={person.name} size={{ xs: 12, sm: 6, md: 4 }}>
                <PersonCard person={person} />
              </Grid>
            ))}

            {/* Services Section with modern design */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card 
                sx={{ 
                  width: '100%', 
                  height: '100%',
                  background: (theme) => 
                    theme.palette.mode === 'light'
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      : 'linear-gradient(135deg, #1a237e 0%, #4a148c 100%)',
                  color: 'white',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(102, 126, 234, 0.4)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography 
                    variant="h4" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700,
                      mb: 3,
                      color: 'white',
                    }}
                  >
                    Our Services
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                    {services.map((service) => (
                      <Chip
                        key={service}
                        label={service}
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* CTA Section */}
          <Box 
            sx={{ 
              textAlign: 'center', 
              py: 6,
              px: 3,
              borderRadius: 4,
              background: (theme) => 
                theme.palette.mode === 'light'
                  ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'
                  : 'linear-gradient(135deg, rgba(144, 202, 249, 0.1) 0%, rgba(206, 147, 216, 0.1) 100%)',
              border: (theme) => `2px solid ${theme.palette.divider}`,
            }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 700,
                mb: 2,
              }}
            >
              Let's Connect
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary"
              sx={{ 
                fontWeight: 400,
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Use the links above to reach out — we'd love to hear from you and discuss how we can help.
            </Typography>
          </Box>
        </Container>

        {/* Footer */}
        <Footer mode={mode} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
