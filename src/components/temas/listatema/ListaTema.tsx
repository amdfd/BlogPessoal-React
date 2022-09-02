import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

import './ListaTema.css';

function ListaTema() {

  return (
    <>
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2" className='color-weight'>
              Minha descrição
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to="" className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft btn" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to="" className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary" className='btnCancelar'>
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}


export default ListaTema;