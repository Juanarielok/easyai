"use client";

import Logo from "../logo/logo";
import header from './header.module.scss';
import MenuDesplegable from "../menuDesplegable/MenuDesplegable";

export default function Header() {
  return (
    <div className={header.encabezado}>
      <Logo />
      <MenuDesplegable />
    </div>
  );
}
