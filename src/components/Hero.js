import React, { Component } from 'react';
import './Hero.scss';

class Hero extends Component {

    state = {
        coverTop: -1800,
        textOpacity: 0
    }
    componentDidMount() {
        this.heroAnimate();
    }

    makeSlide() {
        let bg = '';
        let album = {};
        if (this.props.albums[0]) {
            bg = this.props.albums[0]['im:image'][2].label;
            album = this.props.albums[0];
            return (
                <div className="hero">
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
            }
            .bind(this), 500);
    }

    render() {
        return (
            <div>
				{this.makeSlide()}
			</div>
        )
    }

}



export default Hero;