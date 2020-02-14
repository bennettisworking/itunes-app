import React, { Component } from 'react';
import './Hero.scss';

class Hero extends Component {

    state = {
        coverTop: -1800,
        textOpacity: 0,
        slideTop: 0
    }
    componentDidMount() {
        this.heroAnimate();
    }

    makeSlide(ind) {
        let bg = '';
        let album = {};
        let thisTop = 0;
        if (this.props.albums[ind]) {
            bg = this.props.albums[ind]['im:image'][2].label;
            album = this.props.albums[ind];
            thisTop = this.state.slideTop + (ind * -300);
            return (
	            	<div className="hero" style={{top: thisTop + "px" }}>
					<div className="hero__inset" style ={{ backgroundImage: "url('" + bg + "')" }}></div>
					<div className="hero__content row">
						<div className="hero__album-cover-col col-6 col-lg-5 col-md-5 col-sm-5 text-center text-sm-left">
							<div className="hero__album-cover" style ={{ backgroundImage: "url('" + bg + "')", top: this.state.coverTop + "px" }}></div>
						</div>
						<div className="hero__text col-6 col-lg-7 col-md-7 col-sm-7" style={{opacity: this.state.textOpacity}}>
							<div className="hero__pick">FEATURED</div><br/>
							<div className="hero__title">{album['im:name'].label}</div><br/>
							<div className="hero__artist">{album['im:artist'].label}</div>
							<button onClick={this.props.linkOut.bind(this, album.link.attributes.href)} className="hero__buynow btn btn-success btn-sm">Buy Now</button>
						</div>
					</div>
				</div>
            )
        }
    }

    heroAnimate() {
        setTimeout(
            function() {
                this.setState({
                    coverTop: 0,
                    textOpacity: 1
                });
                setInterval(
            		function() {
            			let t = 300 -this.state.slideTop;
                		this.setState({
                    		slideTop: t
                		});
            		}
            	.bind(this), 7000);
            }
        .bind(this), 500);
    }

    render() {
        return (
            <div className="hero__frame">
				{this.makeSlide(0)}
				{this.makeSlide(1)}
			</div>
        )
    }

}



export default Hero;