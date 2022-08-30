import { Box } from "@mui/material";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import './Navbar.css';

function Navbar() {
  return (
    <>
      <AppBar
        position="static"
        style={{ background: "#74849C", color: "#F2F2F2" }}
      >
        <Toolbar variant="dense">
          <Box style={{ cursor: "default" }}>
            <Typography variant="h5" color="inherit">
              Amanda Falcão //
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit">
                home
              </Typography>
            </Box>
            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>
            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit">
                cadastrar tema
              </Typography>
            </Box>
            <Link to="/login" className="text-decorator-none">
              <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit">
                  logout
                </Typography>
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
