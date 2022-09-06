import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

import "./ListaPostagem.css";
import { useEffect, useState } from "react";
import Postagem from "../../../models/Postagem";
import useLocalStorage from "react-use-localstorage";
import { busca } from "../../../services/Service";

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([]);
  const [token, setToken] = useLocalStorage("token");
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getPost();
  }, [posts.length]);

  return (
    <>
      {posts.map((post) => (
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Postagens
              </Typography>
              <Typography variant="h5" component="h2" className="color-weight">
                {post.titulo}
              </Typography>
              <Typography variant="body2" component="p">
                {post.texto}
              </Typography>
              <Typography variant="body2" component="p">
                {post.tema?.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/formularioPostagem/${post.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft btn"
                      size="small"
                      color="primary"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/deletarPostagem/${post.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      size="small"
                      color="secondary"
                      className="btnCancelar"
                    >
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaPostagem;
