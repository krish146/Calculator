import React from 'react'

function header() {
    const headerStyle={
        backgroundColor:"mediumblue",
        color:"white",
        textAlign:"center"
    }
  return (

    <header className="container-fluid rounded">
      <h1   style={headerStyle}>todo list </h1>
     
    </header>
  )
}

export default header
