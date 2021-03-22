import React from "react"

const Navigation = ({ postPerPage, totalPost, navigate }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <footer>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <button className="btn" onClick={() => navigate(number)} href="#">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Navigation
