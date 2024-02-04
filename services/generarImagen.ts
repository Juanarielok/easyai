import axios, { Axios, AxiosResponse } from "axios";
import mensajeChat from "../models/mensaje";

export default async function generarImagen(
  input: string,
  modelo: string
): Promise<AxiosResponse> {
  let body = {
    mensaje: input,
    modelo: modelo,
  };

  const respuesta = await axios.post("http://localhost:3002/imagen", body);

  return respuesta;
}
