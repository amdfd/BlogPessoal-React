import { useState } from 'react';
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';

import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';

function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string){
      setValue(newValue);
  }
return (
  <>
    <TabContext value={value}>
      <AppBar position="static" style={{ background: "#74849C" }}>
        <Tabs centered indicatorColor="secondary" onChange={handleChange}>
          <Tab label="Todas as postagens" value="1" className='bold-weight'/>
          <Tab label="Sobre mim" value="2" className='bold-weight'/>
        </Tabs>
      </AppBar>
      <TabPanel value="1" >
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <ListaPostagem />
        </Box>
      </TabPanel>
      <TabPanel value="2">
        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre Mim</Typography>
        <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Olá! Sou a Amanda, tenho 29 anos e estou em transição de carreira da área de Educação para a área de Tecnologia. Fui professora de inglês por 10 anos e o que me motivou a mudar foi o primeiro contato com a linguagem Swift, pois na escola na qual lecionava, adicionamos lógica de programação à grade e, por isso, me capacitei como Apple Teacher para ensinar crianças e adolescentes. A partir desse momento vi o mar de oportunidades e desafios que poderia encontrar caso me tornasse desenvolvedora. Este ano decidi me dedicar a estudar em período integral e fui selecionada para o bootcamp de Pessoa Desenvolvedora Web Full Stack da Generation Brasil, o que me possibilitou aprender Java, Spring Boot, MySQL, JUnit e React, e também a aprimorar habilidades como persistência, gestão de tempo e trabalho em equipe com o projeto integrador. Este blog pessoal é o resultado do que aprendi no back end (desenvolvi o CRUD completo desta aplicação) com o que aprendi no front end com React e Material-UI. Caso queira conversar sobre minhas experiências ou oportunidades de trabalho, me mande uma mensagem nas redes abaixo! 👋</Typography>
      </TabPanel>
    </TabContext>
  </>
);
}
export default TabPostagem;