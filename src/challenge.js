import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const defaultTheme = createTheme();

export default function Challenge() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{
      border: 1,
      borderColor: 'primary.main', 
      borderRadius: 2, 
      p: 1, // Padding dentro del Container
      mt: 1, // Margen superior para separarlo de otros elementos
    }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Acceder
          </Typography>
          <Typography component="p" variant="p">
            Usa tu cuenta UniAlpes
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{  width: '100%', p:3, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'  }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Link href="#" variant="body2" sx={{textAlign:'left'}}>
                  ¿Olvidaste el correo electrónico?
            </Link>
            <br/>
            <br/>
            <br/>
            <Grid container spacing={7}>
              <Grid xs={12} sm={6}>
                <br/>
                <Link href="#" variant="body2">
                  Crear cuenta
                </Link>
              </Grid>
              <Grid xs={12} sm={6}>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}>
                Sign In
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
