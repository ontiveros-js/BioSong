import React, { useContext } from "react";
import { Contexto } from "../context/Context";
import Abort from "./Abort";
import InfoArtist from "./InfoArtist";
import InfoSong from "./InfoSong";
import MessageS from "./MessageS";
import MessageA from "./MessageA";


const Detail = () => {
  const { infoArtist, infoSong} = useContext(Contexto);
  
  return (
    <div className="App ">
    
      {infoArtist.artists ? (
        <InfoArtist />
      ) : infoArtist.name ? (
        <Abort />
      ) : (
        <MessageA />
      )}

      {infoSong.lyrics ? (
        <InfoSong />
      ) : infoSong.err ? (
        <MessageS />
      ) : (
        <Abort />
      )}
    </div>
  );
};

export default Detail;
