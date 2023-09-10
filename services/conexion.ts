import RespuestaChat from "@/models/chat";
import axios, { AxiosResponse } from "axios";

function verIArespuesta() : Promise<AxiosResponse<RespuestaChat>> {
  return axios.get<RespuestaChat>(process.env.NEXT_PUBLIC_BACKEND_URL + '/chat');
}

export default verIArespuesta;
