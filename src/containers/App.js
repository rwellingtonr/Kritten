import React, { Component } from "react"
import CardList from "../components/CardList"
import { kittens } from "../kittens"
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry"

class App extends Component {
  // Constructor the state and its parameters
  constructor() {
    super()
    this.state = {
      kittens: kittens,
      searchField: "",
    }
  }

  // Function when the search field changes
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  // Main function to return
  render() {
    const { kittens, searchField } = this.state
    const searchedKitten = kittens.filter((cat) => {
      return cat.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div className="tc">
        <div style={{ height: "180px" }}>
          <h1 className="f1">Kitten Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
        </div>
        <Scroll>
          <ErrorBoundry>
            <CardList kittens={searchedKitten} />
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}

export default App
