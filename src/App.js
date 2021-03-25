import React, { Component } from 'react';
import CardList from './CardList';
import { kittens } from './kittens';
import SearchBox from './SearchBox';


class App extends Component {
    // Constructor the state and its parameters
    constructor() {
        super()
        this.state = {
            kittens: kittens,
            searchField: '',
        }
    }
    // Function when the search field changes
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value})
    }

    // Main function to return
    render(){
        const searchedKitten = this.state.kittens.filter(cat => {
            return cat.name
            .toLowerCase()
            .includes(this.state.searchField.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1 className='f1'> Kitten Friends</h1>
                <SearchBox searchChange={ this.onSearchChange }/>
                <CardList kittens={searchedKitten}/>
            </div>
        );
    }
}

export default App;