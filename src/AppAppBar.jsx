// Copyright (c) 2025 Alex Frutkin
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (theJunkyard), to deal in
// theJunkyard without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// theJunkyard, and to permit persons to whom theJunkyard is furnished to do so,
// subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of theJunkyard.
// 
// THEJUNKYARD IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THEJUNKYARD OR THE USE OR OTHER DEALINGS IN THEJUNKYARD.

import React from 'react';
import PropTypes from 'prop-types';
// Removed Firebase imports
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// Removed LoginIcon, HowToRegIcon
import ToggleColorMode from './ToggleColorMode';
// Removed LoginModal, SignUpModal
import logo from './assets/lightlogo.png';
import darkLogo from './assets/darklogo.png';
// Removed useModal
// Removed ProfileMenu
// Removed useAuth

const logoStyle = {
  width: '150px',
  height: 'auto',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
};

function AppAppBar({ mode, toggleColorMode }) {
  // Removed open state and toggleDrawer function
  // Removed useAuth hook call
  // Removed useModal hook calls

  // Removed handleSignOut

  const handleThemeChange = async () => {
    toggleColorMode();
    // Removed Firestore saving logic
  };

  // Removed handleOpenLoginModal and handleOpenSignUpModal

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '12px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.8)'
                  : 'rgba(30, 30, 30, 0.8)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)',
              boxShadow:
                theme.palette.mode === 'light'
                  ? '0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.08)'
                  : '0 2px 8px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.4)',
              pl: 3,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-10px',
                px: 0,
              }}
            >
              <img
                src={mode === 'dark' ? darkLogo : logo}
                style={logoStyle}
                alt="logo of frutkin.com"
                onClick={() => window.open("/", "_self")}
              />
              {/* Removed Desktop Navigation MenuItems */}
            </Box>
            {/* Removed Desktop Auth buttons and ProfileMenu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <ToggleColorMode mode={mode} toggleColorMode={handleThemeChange} />
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              {/* Removed Mobile ProfileMenu */}
              {/* Removed Menu Button */}
              <ToggleColorMode mode={mode} toggleColorMode={handleThemeChange} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Removed Mobile Drawer */}
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
  // Removed app prop type
};

export default AppAppBar;
