import React from "react";

export default function ComParametro (props){ 
  // isso não pode, esse props é de somente leitura 
  // props.titulo = "Outro titulo";
  return (
  <>
    <h3>{props.titulo}</h3>
    <p>{props.subtitulo}</p>
  </>
)}