import recibirmensaje from "@/models/recibirmensaje"
import enviarmensaje from "@/models/enviarmensaje"

import axios, { AxiosResponse } from "axios";


    


function verIArespuesta(mensajetexto:string, mensajesIA : string[],mensajesUsuario:string[]) : Promise<AxiosResponse<recibirmensaje>> {
  let mensajito: enviarmensaje = {
    input:  {
      text: mensajetexto,
      generated_responses: mensajesIA,
      past_user_inputs: mensajesUsuario
    }

  }
  return axios.post<recibirmensaje>(process.env.NEXT_PUBLIC_BACKEND_URL + '/huggingface',
    mensajito
  );
}



export default verIArespuesta;
