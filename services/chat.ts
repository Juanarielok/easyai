import recibirmensaje from "@/models/recibirmensaje"
import enviarmensaje from "@/models/enviarmensaje"

import axios, { AxiosResponse } from "axios";


    


function verIArespuesta(mensajetexto:string) : Promise<AxiosResponse<recibirmensaje>> {
  let mensaje: enviarmensaje = {
   
      text: mensajetexto,
     
      
    

  }
  return axios.post<recibirmensaje>(process.env.NEXT_PUBLIC_BACKEND_URL + '/huggingface',
    mensaje
  );
}



export default verIArespuesta;
