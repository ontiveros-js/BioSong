import React, { useState, createContext, useEffect } from "react";
import { helpFetch } from "../helpers/helpFetch";

export const Contexto = createContext();

const Context = ({ children }) => {

  let darkLocalStor = localStorage.getItem("dark")
  let makeDark

  if (!darkLocalStor) {
    localStorage.setItem("dark", JSON.stringify(true));
    makeDark = [];
  } else {
    makeDark = JSON.parse(darkLocalStor);
  }

  const [infoForm, setInfoForm] = useState(null);
  const [infoArtist, setInfoArtist] = useState(null);
  const [infoSong, setInfoSong] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dark, setDark] = useState(makeDark);
  

  useEffect(() => {
    if (!infoForm) return;

    const peticion = async () => {
      try {
        const { artist, song } = infoForm;
        let urlSong = `https://api.lyrics.ovh/v1/${artist}/${song}`;
        let urlArtist = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;

        setIsLoading(true);

        const [rspSong, rspArtist] = await Promise.all([
          helpFetch().get(urlSong),
          helpFetch().get(urlArtist),
        ]);

        setIsLoading(false);
        setInfoSong(rspSong);
        setInfoArtist(rspArtist);

        if (rspArtist.err)
          throw { status: rspArtist.status, statusText: rspArtist.statusText };
        if (rspSong.err)
          throw { status: rspSong.status, statusText: rspSong.statusText };

      } catch (error) {
        setIsLoading(false);
        console.log(`Error ${error.status} ${error.statusText}`);
      }
    };

    peticion();
  }, [infoForm]);

  const sharering = {
    infoForm,
    setInfoForm,
    infoArtist,
    setInfoArtist,
    infoSong,
    setInfoSong,
    isLoading,
    dark,
    setDark
  };

  return <Contexto.Provider value={sharering}>{children}</Contexto.Provider>;
};

export default Context;
