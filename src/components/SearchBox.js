import React from "react"

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa3">
      <input
        className="pa3 mb2 w-20-l w-50-m w-70-ns input-reset ba white b--black-80 bg-light-purple "
        type="search"
        placeholder="Search a kitten"
        onChange={searchChange}
      ></input>
    </div>
  )
}

export default SearchBox
