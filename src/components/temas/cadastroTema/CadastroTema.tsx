import { useState, useEffect, ChangeEvent } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import Tema from "../../../models/Tema";
import { buscaId, post, put } from "../../../services/Service";
import { useNavigate, useParams } from "react-router-dom";

import "./CadastroTema.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function CadastroTema() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado!");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedTema(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
        try {
          await put(`/temas`, tema, setTema, {
            headers: {
                'Authorization': token
            }
        })
        alert('Tema atualizado com sucesso!');
    } catch (error) {
      console.log(`Error: ${error}`)
      alert("Erro, por favor verifique a quantidade mínima de caracteres.")
    } 
    
  } else {
      try {
        await post(`/temas`, tema, setTema, {
            headers: {
                'Authorization': token
            }
        })
        alert('Tema cadastrado com sucesso!');
    } catch (error) {
      console.log(`Error: ${error}`)
      alert("Erro, por favor verifique a quantidade mínima de caracteres.")
    }
  }

    back()

}

function back() {
    navigate('/temas')
}

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Cadastro de tema:
        </Typography>
        <TextField
          value={tema.descricao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
          id="descricao"
          label="Descrição"
          variant="outlined"
          placeholder="Insira no mínimo 3 caracteres"
          name="descricao"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" className="btn">
          Finalizar
        </Button>
      </form>
    </Container>
  );
}

export default CadastroTema;
