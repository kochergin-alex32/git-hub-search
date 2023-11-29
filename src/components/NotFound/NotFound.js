import React, {memo} from 'react'

const NotFound = memo(function ({searchValue, setSearchValue}) {
  const searchUser = searchValue.toUpperCase()
  return (
    <div><h1 className='text-light m-2'>НИЧЕГО НЕ НАЙДЕНО ПО ЗАПРОСУ  "{searchUser}"</h1></div>
  )
})

export default NotFound