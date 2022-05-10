import React from "react";
import "./Botoes.css"


export default function Botoes (props) {
  return (
    <div className="buttons">
      <button onClick={props.onInc}>+</button>
      <button onClick={props.onDec}>-</button>
  </div>
  )
}