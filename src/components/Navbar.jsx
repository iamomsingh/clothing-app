import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { AppBar,Toolbar,Typography, Box,Button, useMediaQuery, useTheme,IconButton } from '@material-ui/core';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    notActive: {
        color: 'white',
        textDecoration: 'none',
        fontweight: '600',
        fontsize: '16px',
        paddingBottom: '0.5rem',
        margin: '0.5rem 1.5rem',
      },
      Active: {
        color: 'white',
        textDecoration: 'none',
        margin: '0.5rem 1.5rem',
        fontweight: '600',
        fontsize: '16px',
        paddingBottom: '0.5rem',
        borderBottom: '2px solid blue',
      },
      paper: {
        width: 175,
        backgroundColor: '#272D37',
        color: '#fff',
        borderRadius: 8,
      },
      menuItemRoot: {
        fontSize: 16,
        textAlign: 'left',
      },
}));

const linkList = [
    {
        name: 'SHOP',
        path: '/',
    },
    {
        name: 'CONTACT',
        path: '/contact',
    },
    {
        name: 'SICN IN',
        path: '/sign-in',
    },

]

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));
    const toggleDrawer = () => {
        setOpen(!open);
      };

    return ( 
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ShoppingBasketIcon />
          </IconButton>
          {!mobile && (
            <>
              <Box
                display='flex'
                flexDirection='row'
                flexGrow={1}
                justifyContent='center'
              >
                {linkList.map((link, i) => (
                  <Link
                    to={link.path}
                    key={link.path}
                    className={
                      location.pathname === link.path
                        ? classes.Active
                        : classes.notActive
                    }
                  >
                    {link.name}
                  </Link>
                ))}
                <IconButton>
                    < LocalMallIcon />
                </IconButton>
              </Box>
            </>
          )}
          {mobile && (
            <Button
              variant='contained'
              disableElevation
              color='primary'
              style={{ margin: 'auto 0.5rem' }}
              onClick={() => toggleDrawer()}
            >
              <MenuIcon />
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
     );
}
 
export default Navbar;