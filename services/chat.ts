import recibirmensaje from "@/models/recibirmensaje"
import enviarmensaje from "@/models/enviarmensaje"

import axios, { AxiosResponse } from "axios";


    


function verIArespuesta(mensajetexto:string) : Promise<AxiosResponse<recibirmensaje>> {
  let mensajito: enviarmensaje = {
    input:  {
      text: mensajetexto,
      generated_responses: [],
      past_user_inputs: []
    }

  }
  return axios.post<recibirmensaje>(process.env.NEXT_PUBLIC_BACKEND_URL + '/huggingface',
    mensajito
  );
}



export default verIArespuesta;
