import "./Home.css";
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import { Grid, Button, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { useEffect } from "react";

function Home() {
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token");

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado!");
      navigate("/login");
    }
  }, [token]);
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="container"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo-h3"
            >
              Seja bem-vinde!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo-h5"
            >
              Blog pessoal com meus estudos sobre linguagens de programação e
              tecnologias.
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Button variant="outlined" className="btn">
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://i.imgur.com/1RwWtgp.png"
            alt=""
            width="790px"
            height="512px"
          />
        </Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
