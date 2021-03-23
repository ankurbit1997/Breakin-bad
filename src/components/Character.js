import React from "react"
import { Link } from "gatsby"

const Character = ({ item }) => {
  return (
    <Link
      to={`/character/${item.char_id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="image-container">
        <img src={item.img} alt="" />
        <p>{item.name}</p>
      </div>
    </Link>
  )
}

export default Character
