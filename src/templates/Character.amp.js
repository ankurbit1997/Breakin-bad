import React from "react"

const CharacterAmp = ({ pageContext: { char } }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <amp-img src={char.img} width="100" height="200" layout="responsive" />
      <h2>this is amp page</h2>
      <h1>Name : {char.name}</h1>
    </div>
  )
}

export default CharacterAmp
