import React, {Component} from 'react';
import './ItunesChart.css';
import Hero from './Hero';

class ItunesChart extends Component {
  state = {
    albums: [],
    hero_albums: []
  }

  componentDidMount(){
  	this.fetchAPI();
  }

  fetchAPI(){
    fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
      .then(response => response.json())
      .then(data => {
        this.setState({ albums: data.feed.entry });
        this.setHero();
      })
  }

  displayChart(){
  	const albums = this.state.albums;
  	let displaylist = [];
  	albums.forEach((album, index) => {
  		let imgurl = album['im:image'][2];
  		displaylist.push(
  			<div className="itunesChart__entry col-lg-4 col-md-6 row ml-0 mr-0">
  			<div className="itunesChart__entry__bullet">{index + 1}</div>
  			<div className="itunesChart__entry__image col-lg-5 col-md-5" style ={{ backgroundImage: "url('"+imgurl.label+"')" }}></div>
  			<div className="itunesChart__entry__text col-lg-7 col-md-7">
  			<h4 className="itunesChart__entry__title">{album['im:name'].label}</h4>
  			<div>{album['im:artist'].label}</div>
  			<button className="itunesChart__entry__buy btn btn-success btn-sm" >Buy Now</button>
  			</div>
  			</div>
  			);
  	});
  	return displaylist;
  }

  setHero(){
  	let ids = [];
  	for(let a=0; a<1; a++){
  		ids.push(this.state.albums[Math.floor(Math.random()*100)]); //change to count because not always 100 records
  	}
  	this.setState({ hero_albums: ids });
  }

  render(){
  	let albums = this.state.hero_albums;
  	return(
  		<div>
  		<Hero albums={albums}/>
  		<div className="itunesChart container">
  		<div className="row">
  		{this.displayChart()}
  		</div>
  		</div>
  		</div>
  	)
  }
}

export default ItunesChart;