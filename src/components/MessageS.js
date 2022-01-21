import React,{ useContext } from "react";
import {Contexto} from "../context/Context";

const MessageS = () => {
  const { infoForm, infoArtist } = useContext(Contexto);

  return (
    <div className="divMessage">
      {!infoForm.song ? (
        <p style={{ color: "black" }}>busqueda de cancion no realizada</p>
      ) : (
        <p style={{ color: "black" }}>
          "{infoForm.song}" no se encuentra entre las canciones de "
          {infoArtist.artists
            ? infoArtist.artists[0].strArtist
            : infoForm.artist}
          "
        </p>
      )}
    </div>
  );
};

export default MessageS;
