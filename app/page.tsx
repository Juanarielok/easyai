"use client";

import Botonsitos from "../components/botonsitos/botonsitos";
import Titulo from "@/components/titulo/Titulo";
import React from "react";
import "./page.scss";

export default function App() {
  return (
    <main className="App">
      <Titulo />
      <Botonsitos />
    </main>
  );
}
