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

export function recuperarConversacion() {
    const mensajesIA = localStorage.getItem(claveMensajesIA);
    const mensajesUsuario = localStorage.getItem(claveMensajesUsuario);

    if (isString(mensajesIA) && isString(mensajesUsuario)) {
        let mensajesIAarray = JSON.parse(mensajesIA);
        let mensajesUsuarioArray = JSON.parse(mensajesUsuario);

        return {
            mensajesIAarray,
            mensajesUsuarioArray
        };
    } else {
        return {};
    }
}

export default guardarConversacion;