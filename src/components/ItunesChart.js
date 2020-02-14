import React, {Component} from 'react';
import './ItunesChart.scss';
import Hero from './Hero';

class ItunesChart extends Component {
  state = {
    albums: [], // albums used in display, including filtered by searches, etc.
    allAlbums: [], // all albums from api
    hero_albums: [], // select albums to appear in hero
    searchInput: ''
  }

  componentDidMount(){
  	this.fetchAPI();
  }

  fetchAPI(){
    fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
      .then(response => response.json())
      .then(data => {
        this.setState({ 
        	albums: data.feed.entry,
        	allAlbums: data.feed.entry
        });
        this.setHero();
      })
  }

  displayChart(){
  	const albums = this.state.albums;
  	let displaylist = [];
  	albums.forEach((album, index) => {
  		let imgurl = album['im:image'][2];
  		displaylist.push(
  			<div className="itunesChart__entry col-6 col-lg-4 col-md-6 col-sm-6 col-xs-6 row ml-0 mr-0">
  			<div className="itunesChart__entry__image-col col-6 col-lg-5 col-md-5">
  				<div className="itunesChart__entry__image" style ={{ backgroundImage: "url('"+imgurl.label+"')" }}>
  					<div className="itunesChart__entry__bullet">{index + 1}</div>
  				</div>
  			</div>
  			<div className="itunesChart__entry__text col-6 col-lg-7 col-md-7">
  			<h4 className="itunesChart__entry__title">{album['im:name'].label}</h4>
  			<div>{album['im:artist'].label}</div>
  			<button className="itunesChart__entry__buy btn btn-success btn-tny" >Buy Now</button>
  			</div>
  			</div>
  			);
  	});
  	return displaylist;
  }

  searchAlbums(e) {
  	this.setState({searchInput: e.target.value});
  	let filteredAlbums = this.state.allAlbums;
  	filteredAlbums = filteredAlbums.filter((album) => {
  		let albumArtist = album['im:name'].label.toLowerCase() + album['im:artist'].label.toLowerCase()
  		return albumArtist.indexOf(
        e.target.value.toLowerCase()) !== -1
    })
    this.setState({
      albums: filteredAlbums
    })
  }

  setHero() {
  	let ids = [];
  	for(let a=0; a<1; a++){
  		ids.push(this.state.albums[Math.floor(Math.random()*100)]); //change to count because not always 100 records
  	}
  	this.setState({ hero_albums: ids });
  }

  render(){
  	let albums = this.state.hero_albums;
  	let searchText = this.state.searchInput;
  	return(
  		<div>
  		<Hero albums={albums}/>
  		<div className="itunesChart container">
  		<div className="itunesChart__header row">
  			<div className="col-0 col-sm-0 col-md-4 col-lg-3"></div>
  			<div className="col-12 col-sm-6 col-md-4 col-lg-6 text-sm-left text-md-center">
  				<h4 className="itunesChart__title">The iTunes Hot 100 Albums</h4>
  			</div>
  			<div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center text-sm-right text-md-right">
  				<input className="itunesChart__search" type="text" placeholder="Search artists and titles"
  				onChange={this.searchAlbums.bind(this)} value={searchText}/>
  			</div>
  		</div>
  		<div className="row">
  		{this.displayChart()}
  		</div>
  		</div>
  		</div>
  	)
  }
}

export default ItunesChart;