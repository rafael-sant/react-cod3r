import React from "react";
import Card from "./components/layout/Card";
import "./App.css";

import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Condicional from "./components/basicos/Condicional";
import Repeticao from "./components/basicos/Repeticao";
import PrimeiroComponente from "./components/basicos/PrimeiroComponente";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input  from "./components/form/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";


export default function App() {
  return (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#11 - Mega" color="#4caf50">
        <Mega qtdNumeros={8}></Mega>
      </Card>

      <Card titulo="#10 - Contador" color="#038C7F">
        <Contador passo={10} valor={100}></Contador>
      </Card>
      
      <Card titulo="#09 - Input" color="#025E73">
        <Input></Input>
      </Card>

      <Card titulo="#08 - Comunicação indireta"  color="#A5A692">
        <Super></Super>
      </Card>

      <Card titulo="#07 - Comunicação direta"  color="#BFB78F">
        <Pai sobrenome="Freitas"/>
      </Card>

      <Card titulo="#06 - Condicional com if"  color="#F2A71B">
        <Condicional numero={10}></Condicional>
      </Card>

      <Card titulo="#05 - Condicional v1" color="#034159">
        <Condicional numero={11}></Condicional>
      </Card>

      <Card titulo="#04 - Repetição" color="#593954">
        <Repeticao></Repeticao>
      </Card>

      <Card titulo="#03 - Componentes com filhos" color="#185359">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Gabi</li>
            <li>Iris</li>
            <li>Bia</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card titulo="#02 - Componente com parâmetro" color="#30A5BF">
        <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtitulo" />
      </Card>

      <Card titulo="#01 - Primeiro componente" color="#F2E7DC">
        <PrimeiroComponente></PrimeiroComponente>
      </Card>
    </div>
    
  </div>
);
}