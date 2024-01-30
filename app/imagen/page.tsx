"use client";

import { ReactNode, useState, useEffect } from "react";
import imagen from "../estilos/imagen.module.scss";
import generarTitulo from "./utilidades/generarTitulo";
import generarImagen from "@/services/generarImagen";
import Image from "next/image";
import Button from "@mui/material/Button";
import { TextareaAutosize } from "@mui/material";
import BarraBusqueda from "./subcomponentes/BarraBusqueda";

export default function Page(): ReactNode {
  const [titulo, setTitulo] = useState<string[]>([]);
  const [descripcion, setDescripcion] = useState<string>("GENERAR IMÁGENES");
  const [nuevaImagen, setNuevaImagen] = useState<string>("");

  const getImageUrl = async (prompt: string, titulo: string): Promise<void> => {
    let nuevoTitulo = titulo.split("");

    generarTitulo(nuevoTitulo, setTitulo);

    setTitulo(new Array(0));

    const respuesta = await generarImagen(prompt);

    const imagenUrl = respuesta.data;

    setNuevaImagen(imagenUrl);

  };

  useEffect(() => {
    generarTitulo(descripcion.split(""), setTitulo);
  }, []);

  return (
    <>
      <h1 className={imagen.titulo}>{titulo}</h1>
      <hr className={imagen.linea}/>
      <div className={imagen.main}>
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
      <BarraBusqueda getImageUrl={getImageUrl} />
    </>
  );
}
