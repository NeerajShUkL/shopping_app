import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";

export const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="loginContainerH">
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          minHeight="100vh"
        >
          <Paper elevation={3} sx={{ padding: 5 }}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h5" textAlign="center">
                  Login Page
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  type="email"
                  fullWidth
                  label="Enter your email"
                  placeholder="Email Address"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <TextField
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  label="Password"
                  placeholder="Password"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <Button fullWidth variant="contained">
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default LoginPage;
