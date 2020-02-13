import React, {Component} from 'react';
import './Hero.css';

class Hero extends Component {


makeSlide(){
	let bg = '';
	let album = {};
	if(this.props.albums[0]){
	bg = this.props.albums[0]['im:image'][2].label;
	album = this.props.albums[0];
	return(
		<div className="hero">
			<div className="hero__inset" style ={{ backgroundImage: "url('" + bg + "')" }}></div>
			<div className="hero__content row">
				<div className="hero__album-cover-col col-lg-5">
					<div className="hero__album-cover" style ={{ backgroundImage: "url('" + bg + "')" }}></div>
				</div>
				<div className="hero__text col-lg-7">
					<div className="hero__title">{album['im:name'].label}</div><br/>
					<div className="hero__artist">{album['im:artist'].label}</div>
					<button className="hero__buynow btn btn-success btn-sm">Buy Now</button>
				</div>
			</div>
		</div>
		)
	}
}	

render(){
	return(
	<div>
	{this.makeSlide()}
	</div>
	)
}

}



export default Hero;