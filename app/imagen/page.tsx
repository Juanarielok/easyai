"use client";

import { ReactNode, useState, useEffect } from "react";
import imagen from "../estilos/imagen.module.scss";
import generarTitulo from "./utilidades/generarTitulo";
import generarImagen from "@/services/generarImagen";
import Image from "next/image";

export default function Page(): ReactNode {
  const [titulo, setTitulo] = useState<string[]>([]);
  const [descripcion, setDescripcion] = useState<string>("GENERAR IMÁGENES");
  const [nuevaImagen, setNuevaImagen] = useState<string>("");

  async function manejarEnvio(event: React.FormEvent) {
    event.preventDefault();

    const generarNuevaImagen = async (): Promise<string> => {
      const respuesta = await generarImagen(descripcion);
      const data = respuesta.data;
      return data;
    };

    generarNuevaImagen()
      .then((nuevaImagen) => {
        setNuevaImagen(nuevaImagen);
      })
      .catch((error) => {
        console.error("Error para generar la imagen", error);
      });

    let nuevoTitulo = descripcion.split("");
    generarTitulo(nuevoTitulo, setTitulo);
    setTitulo(new Array(0));
    setDescripcion("");
  }

  useEffect(() => {
    generarTitulo(descripcion.split(""), setTitulo);
  }, []);

  return (
    <>
      <h1 className={imagen.titulo}>{titulo}</h1>
      <hr />
      <div className={imagen.main}>
        <form onSubmit={manejarEnvio} className={imagen.forma}>
          <textarea
            name="mensaje"
            className={imagen.inputMensaje}
            value={descripcion === "GENERAR IMÁGENES" ? "" : descripcion}
            required
            placeholder="Un cuadro impresionista"
            onChange={(event) => {
              setDescripcion(event.target.value);
            }}
          />
          <button type="submit" className={imagen.botonGenerarImagen}>
            Generar Imagen
          </button>
        </form>

        <div className={imagen.contenedorImagen}>
          {nuevaImagen && (
            <Image
              src={nuevaImagen}
              alt={descripcion}
              layout="fill"
              objectFit="contain"
              objectPosition="center top"
            ></Image>
          )}
        </div>
      </div>
    </>
  );
}
