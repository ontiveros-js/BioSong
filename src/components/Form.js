import React, { useContext, useState } from "react";
import { Contexto } from "../context/Context";

const defaultInput = {
  artist: "",
  song: "",
};

const Form = () => {
  const { setInfoForm, dark } = useContext(Contexto);
  const [infoInput, setInfoInput] = useState(defaultInput);

  const handleChange = (e) => {
    setInfoInput({
      ...infoInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfoForm(infoInput);
    setInfoInput(defaultInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className= {dark ? "input inputDark" : "input"}
            required
            type="text"
            name="artist"
            placeholder="Nombre del cantante"
            onChange={handleChange}
            value={infoInput.artist}
          />
        </div>
        <div>
          <input
            className= {dark ? "input inputDark" : "input"}
            type="text"
            name="song"
            placeholder="Nombre de la cancion"
            onChange={handleChange}
            value={infoInput.song}
          />
        </div>
        <input className="input submit" type="submit" value="Buscar" />
      </form>
    </div>
  );
};

export default Form;
