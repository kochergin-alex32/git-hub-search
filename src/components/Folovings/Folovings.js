import React from 'react'

function Folovings({data}) {

    const following = data.following;
    const string = following.toString();
    const lastNum = string.charAt(string.length - 1);
    const penultNum = string.charAt(string.length-2);
    
   

  return (
    <div>
        <p className='text-danger' >{data.following}</p> 
        &nbsp;
        <span>{(lastNum == "1" && !(penultNum == "1") && !(following == 11))? "подписка" : ((lastNum == "2" && !(penultNum == "1") && !(following == 12))?"подписки":((lastNum == "3" && !(penultNum == "1") && !(following == 13))?"подписки":((lastNum == "4" && !(penultNum == "1") && !(following == 14))?"подписки":"подписок")))}</span>
    </div>
  )
}

export default Folovings