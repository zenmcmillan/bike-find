import React from "react";

export default function Card({emptySlots, extra, freeBike, id}) {
  return (
    <div>
      <h3>{extra.address}</h3>
      <p>{emptySlots}</p>
      <p>{extra.ebikes}</p>
      <p>{extra.has_ebikes}</p>
      <p>{extra.postal_code}</p>
      <p>{extra.slots}</p>
      <p>{freeBike}</p>
    </div>
  )
}


      
  
   
  
    