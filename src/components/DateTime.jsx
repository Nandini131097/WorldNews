import React, { useEffect, useState } from 'react'

function DateTime() {
    const [mydate,sateDate]=useState(0)
    useEffect(() => {

        const dateAndTime = new Date();
        document.getElementById("currentFullDate").innerHTML = dateAndTime.toString();

    }, [])

  


  return (
    <div id='DateTime'>
        <p id='currentFullDate'></p>
    </div>
  )
}

export default DateTime
