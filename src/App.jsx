import React from "react";
import Primeiro from "./components/PrimeiroComponente";
import Card from "./components/layout/Card";
import "./App.css";

import ComParametro from "./components/ComParametro";
import ComFilhos from "./components/ComFilhos";
import Repeticao from "./components/layout/Repeticao";
import Condicional from "./components/layout/Condicional";

export default (props) => (
  <div className="App">

    <Card titulo="#06 - Condicional com if ">
      <Condicional numero={10}></Condicional>
    </Card>

    <Card titulo="#05 - Condicional v1">
      <Condicional numero={11}></Condicional>
    </Card>

    <Card titulo="#04 - Repetição">
      <Repeticao></Repeticao>
    </Card>

    <Card titulo="#03 - Componentes com filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Gabi</li>
          <li>Iris</li>
          <li>Bia</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo="#02 - Componente com parâmetro">
      <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtitulo" />
    </Card>

    <Card titulo="#01 - Primeiro componente">
      <Primeiro></Primeiro>
    </Card>
  </div>
);
