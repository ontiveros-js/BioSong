import React, { useContext } from "react";
import { Contexto } from "../context/Context";

const InfoArtist = () => {
  const { infoArtist, dark } = useContext(Contexto);

  return (
    <section className={dark ? "card cardDark" : "card"}>
      <div>
        <h2>Biografia de {infoArtist.artists[0].strArtist}</h2>
        <img
          alt="foto cantante"
          src={
            infoArtist.artists[0].strArtistWideThumb ||
            infoArtist.artists[0].strArtistThumb
          }
        />
      </div>
      <div className="bio">
        <p style={{ textAlign: "center" }}>
          {infoArtist.artists[0].strBiographyES ||
            infoArtist.artists[0].strBiographyEN}
        </p>
      </div>
      <div style={{overflow: "hidden"}}>
        <hr />
        <p>
          <b>Web site:</b>{" "}
          <a
            className={dark ? "aDark" : "a"}
            href={`https://${infoArtist.artists[0].strWebsite}`}
            target="_blank"
            rel="noreferrer"
          >
            {infoArtist.artists[0].strWebsite || `Web no encontrada`}
          </a>
        </p>
        <hr />
        <p>
          <b>Facebook:</b>{" "}
          <a
            className={dark ? "aDark" : "a"}
            href={`https://${infoArtist.artists[0].strFacebook}`}
            target="_blank"
            rel="noreferrer"
          >
            {infoArtist.artists[0].strFacebook || `Facebook no encontrado`}
          </a>
        </p>
        <hr />
        <p>
          <b>Genero:</b> {(infoArtist.artists[0].strGenre || infoArtist.artists[0].strStyle) || "No encontrado"}
        </p>
        <hr />
      </div>
    </section>
  );
};

export default InfoArtist;
