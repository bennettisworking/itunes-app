import React, {Component} from 'react';
import './ItunesChart.css';

class ItunesChart extends Component {
  state = {
    albums: []
  }

  componentDidMount(){
  	this.fetchAPI();
  }

  fetchAPI(){
    fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
      .then(response => response.json())
      .then(data => {
        this.setState({ albums: data.feed.entry });
      })
  }

  displayChart(){
  	const albums = this.state.albums;
  	console.log(albums);
  	let displaylist = [];
  	albums.forEach((album, index) => {
  		let imgurl = album['im:image'][2];
  		displaylist.push(
  			<div className="itunesChart__entry col-lg-4 row ml-0 mr-0">
  			<div className="itunesChart__entry__bullet">{index + 1}</div>
  			<div className="itunesChart__entry__image col-lg-5" style ={{ backgroundImage: "url('"+imgurl.label+"')" }}></div>
  			<div className="itunesChart__entry__text col-lg-7">
  			<h4 className="itunesChart__entry__title">{album['im:name'].label}</h4>
  			<div>{album['im:artist'].label}</div>
  			<button className="itunesChart__entry__buy btn btn-success btn-sm" >Buy Now</button>
  			</div>
  			</div>
  			);
  	});
  	console.log(displaylist);
  	return displaylist;
  }

  render(){
  	return(
  		<div className="itunesChart container">
  		<div className="row">
  		{this.displayChart()}
  		</div>
  		</div>
  	)
  }
}

export default ItunesChart;