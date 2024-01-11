import React from 'react'

function Folovings({data}) {

   
    const string = data.following.toString();
    const lastNum = string.charAt(string.length - 1);
    const penultNum = string.charAt(string.length-2);
    
   

  return (
    <div>
        <p className='text-danger' >{data.following}</p> 
        &nbsp;
        <span>{(lastNum == "1" && !(penultNum == "1"))? "подписка" : ((lastNum == "2" && !(penultNum == "1"))?"подписки":((lastNum == "3" && !(penultNum == "1") )?"подписки":((lastNum == "4" && !(penultNum == "1"))?"подписки":"подписок")))}</span>
    </div>
  )
}

export default Folovings