import Conversation from "@/models/Conversation";
import { isString } from "lodash-es";

const claveMensajesIA = 'mensajesia';
const claveMensajesUsuario = 'mensajesusuario';
const claveMensajeEscrito = 'mensajeEscrito';

export function guardarConversacion(mensajesIA:string[],mensajesUsuario:string[]) : void {
    const mensajesIAstring = JSON.stringify(mensajesIA);
    const mensajesUsuariostring = JSON.stringify(mensajesUsuario);

    localStorage.setItem(claveMensajesIA, mensajesIAstring);
    localStorage.setItem(claveMensajesUsuario, mensajesUsuariostring);
}

export function recuperarConversacion():Conversation {
    const mensajesIA = localStorage.getItem(claveMensajesIA);
    const mensajesUsuario = localStorage.getItem(claveMensajesUsuario);

    if (isString(mensajesIA) && isString(mensajesUsuario)) {
        let mensajesIAarray = JSON.parse(mensajesIA);
        let mensajesUsuarioArray = JSON.parse(mensajesUsuario);

        return {
            generated_responses: mensajesIAarray,
            past_user_inputs: mensajesUsuarioArray
        };
    } 
    
    return {
        generated_responses: [],
        past_user_inputs: []
    }
}

export default guardarConversacion;