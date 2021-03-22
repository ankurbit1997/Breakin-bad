import React from "react"
import Character from "./Character"

const CharaterDisplay = ({ items, isLoading }) => {
  return isLoading ? (
    <p className="loading">loading...</p>
  ) : (
    <section className="characters">
      {items.map(item => (
        <Character key={item.char_id} item={item}></Character>
      ))}
    </section>
  )
}

export default CharaterDisplay
