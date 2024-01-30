"use client";
import { ReactNode, useState } from "react";
import "./page.scss";
import Botonerachat from "../../components/botonerachat/botonerachat";
import Mensajechat from "@/components/mensajechat/mensajechat";
import verIArespuesta from "@/services/chat";
import textoToAudio from "@/services/textoToAudio";
import { AxiosResponse } from "axios";
import recibirmensaje from "@/models/recibirmensaje";
import fs from "fs";
import path from "path";

function Page() {
  let [textoInput, setTextoInput] = useState<string>("");
  let [mensajes, setMensajes] = useState<ReactNode[]>([]);

  function ENVIARMENSAJE(event: React.FormEvent) {
    event.preventDefault();

    const mensajeUsuario = textoInput;
    setTextoInput("");

    verIArespuesta(textoInput).then(function (
      respuesta: AxiosResponse<recibirmensaje>
    ) {
      let mensajeIA: string = respuesta?.data?.respuestaIA;

      setMensajes([
        ...mensajes,
        <Mensajechat mensaje={mensajeUsuario} esAI={false} />,
        <Mensajechat mensaje={mensajeIA} esAI={true} />,
      ]);
    });
  }

  return (
    <div className="contenedor-chat-principal">
      <div className="envoltorio">
        <div className="barra-lateral">
          <Botonerachat />
        </div>
        <div className="barra-central">
          <div className="cartelera">{mensajes}</div>
          <form className="BARRABUSQUEDACHAT" onSubmit={ENVIARMENSAJE}>
            <input
              type="text"
              maxLength={180}
              placeholder="How do I..."
              value={textoInput}
              onChange={(evento) => setTextoInput(evento.target.value)}
              className="Barrabusqueda-input"
            />
            <button type="submit" className="botonsito2">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
