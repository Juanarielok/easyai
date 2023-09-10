import Mensaje from "@/models/mensaje";
import RespuestaSobreTexto from "@/models/respuesta-sobre-texto";

import { pipeline } from '@xenova/transformers';

function verIArespuesta() {

  let mensajetexto: Mensaje = {
    esRespuestaIA: true,
    mensaje: "pepito"
  };

  return mensajetexto;
}

export async function responderPregunta( contexto : string, pregunta : string) : Promise<RespuestaSobreTexto> {
  let ia = await pipeline('question-answering', 'Xenova/distilbert-base-uncased-distilled-squad');
  let output = await ia(pregunta, contexto);

  return output;
}



export default verIArespuesta;
