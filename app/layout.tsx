"use client";
import Header from "@/components/header/Header";
import "./layout.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { keys } from "lodash-es";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let [estilos, setestilos] = useState("");

  const clases: { [key: string]: string } = {
    "/chat": "chatear",
    "/imagen": "Generar Imagen",
    "/": "body",
    "/register": "registrar",
    "/Login": "loguear",
    "/aboutUs": "acerca",
    "/contact": "contacto",
  };

  const pathname = usePathname();

  useEffect(() => {
    setestilos(clases[pathname]);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <title>AI Easy!</title>
      </head>
      <body className={estilos}>
        <Header />
        {children}
      </body>
    </html>
  );
}

/*<img className='sol' src="/icons/lens2.gif" />  */
