'use client'

import Logo from "../logo/logo";
import './header.scss'
import Menu from "../menu/menu";
import MenuDesplegable from "../menuDesplegable/MenuDesplegable";

export default function header() {

    return(  
    
   <div className="headerino"> 
        <Logo/> 
         {/* El componente Menu se quito y se debe colocar dentro del nuevo componente MenuDesplegable. */}
        <MenuDesplegable /> 
   </div>
    
    
    
    
    )
    
    
    
    
    
    };
    