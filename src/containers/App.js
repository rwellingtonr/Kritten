import React, { useState } from "react"
import CardList from "../components/CardList"
import { kittens } from "../kittens"
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry"

export default function App() {
  //Contructor with hooks
  const kitten = kittens
  const [searchField, setSearchField] = useState("")

  // Function when the search field changes
  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  const searchedKitten = kitten.filter((cat) => {
    return cat.name.toLowerCase().includes(searchField.toLowerCase())
  })

  return (
    <div className="tc ">
      <h1 className="f1">Kitten Friends</h1>
      <SearchBox searchChange={onSearchChange} />

      <Scroll>
        <ErrorBoundry>
          <CardList kittens={searchedKitten} />
        </ErrorBoundry>
      </Scroll>
    </div>
  )
}
