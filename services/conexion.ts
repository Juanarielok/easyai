import RespuestaChat from "@/models/respuesta-chat";
import axios from "axios";
import 'dotenv/config';

function verIArespuesta() : Promise<RespuestaChat> {
  return axios.get(process.env + '/chat');
}

export default verIArespuesta;
