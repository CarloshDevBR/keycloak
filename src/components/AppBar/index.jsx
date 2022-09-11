import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Logout from '../Logout';

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Keycloak React AUTH
          </Typography>
          
          <div style={{ flexGrow: 1 }}>
            <Button color="inherit"><Link to="/" >Home</Link></Button>
            <Button color="inherit"><Link to="/Secured">Secured Page</Link></Button>
          </div>

          <Logout />
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar