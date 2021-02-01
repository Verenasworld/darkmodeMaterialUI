
import './App.css';
import {Switch, Grid, Typography, Button, Paper} from "@material-ui/core";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {useState} from "react";




function App() {

    const [darkMode, setDarkMode] = useState(false)
    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light",
        }
    })

  return (
    <ThemeProvider theme={theme}>
        <Paper style={{ height: "100vh"}}>
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>
            <Grid container direction="column">
                <Typography variant="h1"> This is great</Typography>
                <Button variant="contained" color="primary">
                    this is a button
                </Button>
                <Button variant="contained" color="secondary">
                    this is also a great button
                </Button>
            </Grid>
        </Paper>
    </ThemeProvider>
  );
}

export default App;
