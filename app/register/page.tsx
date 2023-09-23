'use client'


import './page.scss';
import Link from 'next/link';
import React, { useState } from 'react';
function Page() {

 let [textito, settextito] = useState('');




  return (    
    
    <div className="App">
   
   <div>   
      




        <div className="BARRAemail">
          
        <label  className='cartelin '> Email Address        </label>




</div>

<div className="IDNOMBRE">
          
          <label  className='cartelin '> Email         </label>
  
  <input></input>
  
  
  
  </div>
    
  


</div>



 
   
</div>


   
  );
}

export default Page;
