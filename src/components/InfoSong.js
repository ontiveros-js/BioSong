import React, { useContext } from "react";
import { Contexto } from "../context/Context";

const InfoSong = () => {
  const { infoSong, infoArtist, infoForm, dark } = useContext(Contexto);

  const deleteText = (text) => {
    let deleteLine = text.lyrics.split(`\n`);
    return text.lyrics.split(deleteLine[0]).join("");
  };

  return (
    <section className={dark ? "card cardDark" : "card"}>
      <h2>
        {infoForm.song} por {infoArtist.artists[0].strArtist}
      </h2>
      <blockquote style={{ whiteSpace: "pre-wrap" }}>
        <p>{deleteText(infoSong) || infoSong.lyrics}</p>
      </blockquote>
    </section>
  );
};

export default InfoSong;
