import React from "react"
import "./style.css"
import Header from "../components/ui/Header"
import { Link } from "gatsby"

const Character = ({ pageContext: { char } }) => (
  <div>
    <Header />
    <div className="character">
      <img src={char.img} alt="" style={{ width: 10 + "rem" }} />
      <p>Name: {char.name}</p>
      <p>NickName: {char.nickname}</p>
      <p>Birthday: {char.birthday}</p>
      <p>Primary occupation: {char.occupation}</p>
      <p>Status: {char.status}</p>
      <Link to={`/`}> Go Back</Link>
    </div>
  </div>
)

export default Character
