import RespuestaChat from "@/models/chat";
import RespuestaSobreTexto from "@/models/respuesta-sobre-texto";
import axios, { AxiosResponse } from "axios";

function verIArespuesta() : Promise<AxiosResponse<RespuestaChat>> {
  return axios.post<RespuestaChat>(process.env.NEXT_PUBLIC_BACKEND_URL + '/chat');
}

export function responderPregunta(contexto: string, pregunta : string) : Promise<AxiosResponse<RespuestaSobreTexto>> {
  return axios.post<RespuestaSobreTexto>(process.env.NEXT_PUBLIC_BACKEND_URL + '/respuestasobretexto');
}

export default verIArespuesta;
