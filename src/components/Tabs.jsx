import React, { useState } from 'react'

const Tabs = ({tabText, btnClass, setActive}) => {
  return (
    <button  className={btnClass} onClick={() => setActive(tabText)}>{tabText}</button>
  )
}

export default Tabs