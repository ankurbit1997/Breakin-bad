import React from "react"

import "./test.css"

const CharacterAmp = ({ pageContext: { char } }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <amp-img src={char.img} alt="test" width="400" height="800"></amp-img>
      <h2>this is amp page</h2>
      <h1>Name : {char.name}</h1>
    </div>
  )
}

export default CharacterAmp
