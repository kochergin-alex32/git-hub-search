import React from 'react'


function Folovers({data}) {
    const followers = data.followers;
    const string = followers.toString();
    const lastNum = string.charAt(string.length - 1);
    const penultNum = string.charAt(string.length-2);
    
   

  return (
    <div>
            <p className='text-danger' >{data.followers}</p> 
                &nbsp;
            <span>{(lastNum == "1" && !(penultNum == "1") && !(followers == 11))? "подписчик" : ((lastNum == "2" && !(penultNum == "1") && !(followers == 12))?"подписчикa":((lastNum == "3" && !(penultNum == "1") && !(followers == 13))?"подписчикa":((lastNum == "4" && !(penultNum == "1") && !(followers == 14))?"подписчикa":"подписчиков")))}
            </span>
     </div>
  )
}

export default Folovers