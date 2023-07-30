import { Box, Grid, Paper, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: '25vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    innerbox: {
        color: '#4a4a4a',
        backgroundColor: 'skyBlue',
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',   
        width: '50%',
        height: '50%',
        padding: '0.2 rem'
    }
}));

const clothItem = [
  {
    title: "HATS",
    subtitle: "SHOP NOW",
  },
  {
    title: "JACKETS",
    subtitle: "SHOP NOW",
  },
  {
    title: "SNEAKERS",
    subtitle: "SHOP NOW",
  },
];

const HomePage = () => {
    const classes = useStyles();

    return (
    <div style={{margin: '2rem'}}>
        <Grid container spacing={3}>
            {clothItem.map((item) => (
                <Grid item xs={4}>
                    <Paper className= {classes.paper}>
                        <Paper className = {classes.innerbox}>
                            <Box><Typography variant="h5" style={{marginBottom:'0.3rem'}}>{item.title} </Typography></Box>
                            <Box><Typography variant="p">{item.subtitle}</Typography></Box>
                        </Paper>
                    </Paper>
                </Grid>
            ))}
        <Grid item xs={6}>
            <Paper className={classes.paper}>
                <Paper className = {classes.innerbox}>
                    <Box><Typography variant="h5" style={{marginBottom:'0.3rem'}}> Womens</Typography></Box>
                    <Box><Typography variant="p">SHOP NOW</Typography></Box>
                </Paper>
            </Paper>
        </Grid>
        <Grid item xs={6}>
            <Paper className= {classes.paper}>
                <Paper className = {classes.innerbox}>
                    <Box><Typography variant="h5" style={{marginBottom:'0.3rem'}}>Mens</Typography></Box>
                    <Box><Typography variant="hp">SHOP NOW</Typography></Box>
                </Paper>
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default HomePage;
