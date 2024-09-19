import React from 'react'

function Copyrights() {

const date = new Date();
const year =date.getFullYear()
  return (
    <div>
      <p>{`Copyright © ${year}. Batt Television Network. All Rights Reserved.`}</p>
    </div>
  )
}

export default Copyrights
