import React, { ReactNode, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import barraBusqueda from "../estilos/barraBusqueda.module.scss";

type BarraBusquedaProps = {
  getImageUrl: (
    prompt: string,
    titulo: string,
    modelo: string
  ) => Promise<void>;
};

export default function BarraBusqueda({
  getImageUrl,
}: BarraBusquedaProps): ReactNode {
  const [prompt, setPrompt] = useState<string>("");
  const [modelo, setModelo] = useState<string>("");

  function manejarEnvio(event: React.FormEvent) {
    event.preventDefault();

    let mensajePrompt = prompt;

    getImageUrl(mensajePrompt, mensajePrompt, modelo.toLowerCase());

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

        <div className={barraBusqueda.selectorModelo}>
          <FormControl
            sx={{ m: 1, minWidth: 30, minHeight: 50 }}
            size="small"
            fullWidth={true}
          >
            <InputLabel id="modelo-etiqueta">Modelo</InputLabel>
            <Select
              labelId="selector-etiqueta"
              id="selector-etiqueta"
              value={modelo}
              label="Modelo"
              onChange={(event) => {
                setModelo(event.target.value);
              }}
              required
            >
              <MenuItem value="Dalle-3">Dalle-3</MenuItem>
              <MenuItem value="Prodia">Prodia</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Button
          variant="contained"
          type="submit"
          className={barraBusqueda.enviarBoton}
        >
          Generar Imagen
        </Button>
      </form>
    </div>
  );
}
