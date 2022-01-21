import React,{useContext} from "react";
import { Contexto } from "../context/Context";
import "../Loader.css";

const Loader = () => {

  const {dark} = useContext(Contexto)

  return (
    <div>
      <article className={dark ? "container dark" : "container"}>
        <div className="background"></div>
      </article>
      <article className={dark ? "container dark" : "container"}>
        <div className="background"></div>
      </article>
    </div>
  );
};

export default Loader;
