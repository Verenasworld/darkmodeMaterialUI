
import './App.css';
import {Switch, Grid, Typography, Button, Paper} from "@material-ui/core";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {useState} from "react";
import {blue} from "@material-ui/core/colors";


function App() {

    const [darkMode, setDarkMode] = useState(false)
    const darkTheme = createMuiTheme({
        palette: {
          type: "dark",
        },
    });

    const myTheme = createMuiTheme({
        palette: {
            primary: blue,
            secondary: blue,
        }
    })

  return (
    <ThemeProvider theme={darkMode ? darkTheme : myTheme}>
        <Paper style={{ height: "100vh", padding: "500px "}}>
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>
            <Grid container direction="row">
                <Typography variant="h1">This is great Stuff</Typography>
                <Button style={{margin: "10px"}} className="myButton" variant="contained" color="primary" size="small" >
                    this is a button
                </Button>
                <Button  style={{margin: "10px"}} variant="contained" color="secondary"  size="small" >
                    this is also a great button
                </Button>
            </Grid>
        </Paper>
    </ThemeProvider>
  );
}

export default App;
