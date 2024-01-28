import axios, { AxiosResponse } from "axios";
import * as fs from "fs";
import { HttpStatusCode } from "axios";
import recibirAudio from "@/models/textoToAudio/recibirAudio";
import mensajeChat from "@/models/mensaje";

async function textoToAudio(mensajeTexto: string) {
  let mensaje: mensajeChat = {
    mensaje: mensajeTexto,
  };

  const respuesta = await axios.post("http://localhost:3002/audio", mensaje);

  return respuesta.data;
}

export default textoToAudio;
