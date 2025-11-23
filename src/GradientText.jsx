import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

const GradientText = ({ children, ...props }) => {
  return (
    <Box
      component={motion.span}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      sx={{
        display: 'inline-block',
        background: 'linear-gradient(90deg, #a78bfa, #818cf8, #60a5fa, #34d399, #60a5fa, #818cf8, #a78bfa)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: 'gradient-flow 8s ease-in-out infinite',
        '@keyframes gradient-flow': {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default GradientText;
