// app/page.tsx
'use client';

import { Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import { auth, provider, signInWithPopup } from "../lib/firebase";

export default function HomePage() {
  const [user, setUser] = useState<any>(null);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Next.js + Google Sign-In</Typography>
      {user ? (
        <Typography>Welcome, {user.displayName}</Typography>
      ) : (
        <Button variant="contained" onClick={handleSignIn}>
          Sign in with Google
        </Button>
      )}
    </Container>
  );
}
