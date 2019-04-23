import React from 'react';
import "../BrewList/BrewList.css"
import axios from 'axios';
import ToolBar from "../Toolbar/Toolbar"
// import beermap from "../Images/beermap.PNG"

export default class BrewList extends React.Component {
  state = {
    beers: []
  }

  componentDidMount() {
    axios.get("http://localhost:3002/brews/list",{crossdomain:true})
      .then(res => {
        const beers = res.data;
        this.setState({ beers });
        console.log(beers)
      })
  }

  render() {
    return (

    <React.Fragment>
      <ToolBar />
      <div className="picContainer">
      {/* < img src = {beermap}   alt = "map"/> */}
      </div>
      <div className = "container">
      <div className = "beerlist">
      <div className = "beerlist-header">Your Favorites</div>
      <div className = "breweryBeers">
        { this.state.beers.map(beers =>
        <React.Fragment>
        <h3><li>{beers.brewery}</li></h3>
        <p><li>{beers.beer}</li></p>
      </React.Fragment>
          )}
      </div>
      </div>
      </div>
      
      </React.Fragment>

    )
  }
}