import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import './Footer.css';

function Footer() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="footer-container">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom>Me siga nas redes sociais:</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/amdfd" target="_blank">
                                <GitHubIcon className="redes"/>
                            </a>
                            <a href="https://wa.me/5511988362046" target="_blank">
                                <WhatsAppIcon className="redes"/>
                            </a>
                            <a href="https://www.linkedin.com/in/amdfd/" target="_blank">
                                <LinkedInIcon className="redes"/>
                            </a>
                        </Box>
                    </Box>
                    <Box className="footer-container-2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='sub-2'>© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom className="sub-2" align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    </>
  );
}

export default Footer;
