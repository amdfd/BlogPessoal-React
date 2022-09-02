import { Grid } from '@material-ui/core';
import { Box } from '@mui/material';

import './NotFound.css';

function NotFound(){
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" className="container">
      <Grid alignItems="center">
      <Box>
        <img src="https://i.imgur.com/Uz0EkKI.png" alt="" />
      </Box>
      </Grid>
    </Grid>
  )
}

export default NotFound;