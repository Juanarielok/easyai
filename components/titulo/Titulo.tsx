"use client";

import React, { ReactElement, useState, useEffect } from "react";
import titulo from "./titulo.module.scss";
import insercionLenta from "./utilidades/insercionLenta";

export default function Titulo(): ReactElement {
  const [eslogan, setEslogan] = useState<string[]>([]);
  const eslogans: string[] = [" create", " imagine", " inspire", "day"];

  useEffect(() => {
    insercionLenta(eslogans, setEslogan);
  }, []);

  return (
    <section className={titulo.contenedor}>
      <h1 className={titulo.banner}>Choose the AI tool you need </h1>
      <span className={titulo["eslogan-activo"]}> to{eslogan}</span>
    </section>
  );
}
