import React,{ useContext } from "react";
import {Contexto} from "../context/Context";

const MessageA = () => {
  const { infoForm, infoArtist } = useContext(Contexto);

  return (
    <div className="divMessage">
      <p style={{ color: "black" }}>"{infoForm.artist}" no encontrado</p>
    </div>
  );
};

export default MessageA;
