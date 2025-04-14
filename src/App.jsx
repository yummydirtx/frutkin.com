import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  CssBaseline,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Example Icon

// Placeholder data - replace with actual data and images
const people = [
  {
    name: 'Jonathan Frutkin',
    title: 'CEO, Radix Law',
    location: 'Scottsdale, AZ & Medellin, Colombia',
    linkedin: 'https://www.linkedin.com/in/frutkinlaw',
    image: 'jfrutkin.jpeg', // Assuming images are in public folder
  },
  {
    name: 'Elliott Frutkin',
    title: 'Experienced Technology Professional',
    location: 'San Jose, CA',
    linkedin: 'https://www.linkedin.com/in/frutkin/',
    image: 'efrutkin.jpeg',
  },
  {
    name: 'Rachel Frutkin Beachler',
    title: 'Personal Trainer, Running on Happy / Asst Track Coach',
    location: 'Cleveland, OH',
    linkedin: 'https://www.linkedin.com/in/rfrutkin',
    image: 'rfrutkin.jpeg',
  },
  {
    name: 'Maxine Frutkin',
    title: 'Real Estate Professional',
    location: 'Scottsdale, AZ',
    linkedin: 'https://www.linkedin.com/in/mfrutkin',
    image: 'Maxine_Frutkin_2037_Gray.png',
  },
  {
    name: 'Harvey Frutkin',
    title: 'Former Lawyer / Author',
    location: 'Cleveland, OH',
    article: 'https://azbigmedia.com/business/business-leaders/frutkin-law-firm-announces-harvey-frutkins-retirement/',
    image: 'hfrutkin.jpeg',
  },
];

const services = [
  'Technology',
  'Entrepreneurship',
  'Fitness',
  'Estate Planning',
  'Real Estate Buyers & Sellers',
  'Bankruptcy / Restructuring',
];

// Basic Card component for reuse
function PersonCard({ person }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Basic placeholder for image */}
      <Box sx={{ height: 140, backgroundColor: 'grey.300', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         {/* In a real app, use CardMedia with person.image */}
         <Typography variant="caption">{person.image || 'Image'}</Typography>
      </Box>
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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check for mobile size

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {/* Add actual navigation links here */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#!">
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#!"> {/* Update href later */}
            <ListItemText primary="Younger Frutkins" />
          </ListItemButton>
        </ListItem>
         {/* Add more links as needed */}
      </List>
    </Box>
  );

  return (
    // Wrap everything in a Box with flex column layout
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      {/* Basic AppBar */}
      <AppBar position="static">
        <Toolbar>
          {isMobile && (
             <IconButton
               size="large"
               edge="start"
               color="inherit"
               aria-label="menu"
               sx={{ mr: 2 }}
               onClick={toggleDrawer(true)}
             >
               <MenuIcon />
             </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FRUTKIN.COM
          </Typography>
          {!isMobile && (
            <Box>
               {/* Desktop Nav Links */}
               <Button color="inherit" href="#!">Home</Button>
               <Button color="inherit" href="#!">Younger Frutkins</Button> {/* Update href later */}
            </Box>
          )}
        </Toolbar>
      </AppBar>

       {/* Mobile Drawer */}
       <Drawer
         anchor="left"
         open={drawerOpen}
         onClose={toggleDrawer(false)}
       >
         {drawerList}
       </Drawer>

      {/* Main Content Area - Add flexGrow: 1 */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        {/* Welcome Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to FRUTKIN.COM
          </Typography>
          <Typography variant="body1">
            If you've landed here, you are probably looking for one of the following services or people:
          </Typography>
        </Box>

        {/* People Grid */}
        <Grid container spacing={4}>
          {people.map((person) => (
            <Grid item key={person.name} xs={12} sm={6} md={4}>
              <PersonCard person={person} />
            </Grid>
          ))}

           {/* Services Section - Placed in the grid for layout */}
           <Grid item xs={12} sm={6} md={4}>
             <Card sx={{ height: '100%'}}>
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
    </Box> // Close the wrapping Box
  );
}

export default App;
