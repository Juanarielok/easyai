import axios from "axios";
import mensajeChat from "../models/mensaje";

export default async function generarImagen(input: string) {
  let mensaje: mensajeChat = {
    mensaje: input,
  };

  const respuesta = await axios.post("http://localhost:3002/imagen", mensaje);

  return respuesta;
}
