import React, { useState } from "react";

export default function Input(props){ 
  // let nome = "Rafael" 
  const [nome, setNome] = useState("Gabi")

  return (
  <>
    <h2>{nome}</h2>
    <input type="text" value={nome} onChange={e => setNome(e.target.value)}></input>
  </>
)}