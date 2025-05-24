// app/page.tsx
'use client';

import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  IconButton,
  InputLabel,
  TextField,
  Typography,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { useState } from 'react';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { auth, provider, signInWithPopup } from '../lib/firebase';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const [user, setUser] = useState<any>(null);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
      >
        {/* Header Row */}
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Image src="/assets/necxis-logo.png" alt="Necxis" width={120} height={30} />

        </Box>

        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
          }}
        >
          <IconButton onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>

        <Box
          sx={{
            width: '100%',
            maxWidth: 400,
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
            bgcolor: 'background.paper',
          }}
        >
          <Typography variant="subtitle1" gutterBottom>
            Please enter your details
          </Typography>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Welcome back
          </Typography>

          <TextField
            fullWidth
            label="Email address"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 1,
              mb: 2,
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="Remember for 30 days"
            />
            <Link href="#" style={{ fontSize: '0.875rem' }}>
              Forgot password
            </Link>
          </Box>

          <Button
            fullWidth
            variant="contained"
            sx={{ mb: 2 }}
          >
            Sign up
          </Button>

          <Button
            fullWidth
            variant="outlined"
            startIcon={
              <Image src="/assets/google-logo.png" alt="Google" width={20} height={20} />

            }
            onClick={handleSignIn}
          >
            Sign in with Google
          </Button>

          <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
            Don&apos;t have an account?{' '}
            <Link href="#" style={{ fontWeight: 600 }}>
              Sign up
            </Link>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
