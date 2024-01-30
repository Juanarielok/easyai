import React, { ReactNode, useState } from "react";
import Button from "@mui/material/Button";
import barraBusqueda from "../estilos/barraBusqueda.module.scss";

type BarraBusquedaProps = {
  getImageUrl: (prompt: string, titulo: string) => Promise<void>;
};

export default function BarraBusqueda({
  getImageUrl,
}: BarraBusquedaProps): ReactNode {
  const [prompt, setPrompt] = useState<string>("");

  function manejarEnvio(event: React.FormEvent) {
    event.preventDefault();

    let mensajePrompt = prompt;

    getImageUrl(mensajePrompt, mensajePrompt);

    setPrompt("");
  }

  return (
    <div className={barraBusqueda.body}>
      <form className={barraBusqueda.forma} onSubmit={manejarEnvio}>
        <input
          type="text"
          name="prompt"
          value={prompt}
          placeholder="Un cuadro impresionista de las montañas colombianas."
          className={barraBusqueda.contenedorBusqueda}
          onChange={(event) => {
            setPrompt(event.target.value);
          }}
          required
        />

        <Button
          variant="contained"
          type="submit"
          className={barraBusqueda.enviarBoton}
        >
          Generar Imagen
        </Button>
      </form>

      <label>Elige tu modelo preferido: </label>
      <select>
        <option>Dalle-2</option>
        <option>Prodia</option>
      </select>
    </div>
  );
}
