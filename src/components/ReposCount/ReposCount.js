import React from 'react'

function ReposCount({ id}) {
   
    const stringId = id.public_repos.toString();
    const lastNum = stringId.charAt(stringId.length - 1);
    const penultNum = stringId.charAt(stringId.length-2);
    // console.log(id.public_repos);
  return (
    <div >
   
    {id.public_repos}&nbsp; 

    {(lastNum == "1" && !(penultNum == "1") )? "репозиторий" : ((lastNum == "2" && !(penultNum == "1"))?"репозитория":((lastNum == "3" && !(penultNum == "1"))?"репозитория":((lastNum == "4" && !(penultNum == "1"))?"репозитория":"репозиториев")))}

    </div>
  )
}

export default ReposCount