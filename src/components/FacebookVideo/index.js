import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import FacebookPlayer from 'react-facebook-player';

class FacebookVideo extends Component {

	constructor(props) {
		super(props);
	 
		this.state = {
		  player: null,
		};
	  }
	  onReady = (player) => {
		this.setState({
		  player: player,
		});

		if(player){
			setTimeout(function(){
				player.play();
				player.unmute();
				player.setVolume(1);
			},200)
		}
		
	  }
	 
	  playVideo = () => {
		const { player } = this.state;
		if (player) {player.play();};
	  }
	 
	  pauseVideo = () => {
		const { player } = this.state;
		if (player) player.pause();
	  }
	render() {
		const { videoId, appId, autoPlay  } = this.props

		return (
			<View style={styles.wrapper}>
				<FacebookPlayer
				videoId={videoId}
				appId={appId}
				onReady={ this.onReady }
				autoplay={autoPlay}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		
	}
})

export default FacebookVideo
