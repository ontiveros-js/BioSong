import React, { useContext } from "react";
import Detail from "./Detail";
import Form from "./Form";
import Loader from "./Loader";
import { Contexto } from "../context/Context";

const Principal = () => {

  const { isLoading, infoArtist, dark, setDark } = useContext(Contexto); 


  if(dark){
    document.body.classList.add("bodyDark")
    
  }else{
    document.body.classList.remove("bodyDark")
    
  }
   

  return (
    <>
      <button className="btnDark" onClick={() => setDark(!dark)}>
         {dark ? "☀️" : "🌙"}
      </button>
      <h1 style={{padding: "5px", margin: "5px"}}>Letras de canciones y biografia de cantantes</h1>
      <Form />
      <div className="principal">
        {isLoading && <Loader /> }
        {(infoArtist && !isLoading) && <Detail />}
      </div>
    </>
  );
};

export default Principal;
