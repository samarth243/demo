import React, { Component } from 'react'
import MovieList from './MovieList';

export default class Moviecontainer extends Component {
    constructor(props)
    {
        super(props);
        // this.state={ name:"fantom",
        //         imdb:"9.5"};
        // this.state=
        // MovieList:Array(9).fill(null);

    }
    renderMovieList()
    {

    }
  render() {
    return (
      <div>
        <h1>
             here {this.state.imdb}
        
        </h1>
      </div>
    )
  }
}

