import React, { useState } from "react"

const Filter = ({ getQuery }) => {
  const [search, setSearch] = useState("")

  const onChange = q => {
    setSearch(q)
    getQuery(q)
  }

  return (
    <form className="filter">
      <input
        type="text"
        className="form"
        placeholder="Search Characters"
        value={search}
        onChange={e => onChange(e.target.value)}
      />
    </form>
  )
}

export default Filter
