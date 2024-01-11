import React from 'react'


function Folovers({data}) {
   
    const string =  data.followers.toString();
    const lastNum = string.charAt(string.length - 1);
    const penultNum = string.charAt(string.length-2);
    
   

  return (
    <div>
            <p className='text-danger' >{data.followers}</p> 
                &nbsp;
            <span>{(lastNum == "1" && !(penultNum == "1"))? "подписчик" : ((lastNum == "2" && !(penultNum == "1"))?"подписчикa":((lastNum == "3" && !(penultNum == "1"))?"подписчикa":((lastNum == "4" && !(penultNum == "1"))?"подписчикa":"подписчиков")))}
            </span>
     </div>
  )
}

export default Folovers