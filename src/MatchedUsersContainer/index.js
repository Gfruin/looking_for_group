import React, {Component} from 'react'
import MatchedUser from '../ShowMatchedUser'
import MatchedUserGM from '../ShowMatchedUserGM'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class MatchedUsersContainer extends Component {
	constructor(props) {
		super();
		this.state = {
			matchedUsers: props.matchedUsers,
			matchedUserShow: null,
			matchedUserShowGM: null
		}
	}
	setMatchedUserShow = (e) => {

		console.log("set matchedUserShow THIS:")
		console.log(this)

		console.log("dataset:")
		console.log(e.currentTarget.dataset)

		const key = e.currentTarget.dataset.key 

		if (e.currentTarget.dataset.gamemasterIndex) {
			// move all gamemaster stuff into here 
			const gamemasterIndex = e.currentTarget.dataset.gamemasterIndex

			const gamemaster = this.state.matchedUsers.results[key].gamemasters[gamemasterIndex]

			this.setState({
			// matchedUserShowGM: gamemaster,
			matchedUserShow: gamemaster
		})
		} 

		if (e.currentTarget.dataset.playerIndex) {
			// move all player stuff into here 
			const playerIndex = e.currentTarget.dataset.playerIndex

			console.log(key)
			console.log(playerIndex)

			const player = this.state.matchedUsers.results[key].players[playerIndex]

			console.log("here is the player:")
			console.log(player)
			this.setState({
				matchedUserShow: player
			})
		}

	}
	clearMatchedUserShow = () => {
		this.setState({
			matchedUserShow: null,
			matchedUserShowGM: null
		})
	}
	render() {

		console.log("MatchedUsersContainer STATE:")
		console.log(this.state);
		// grab the matched users by game system by using object keys
		const gameSystemsList = (Object).keys(this.state.matchedUsers.results).map((key, i) => {


			let playerList = null;
			// console.log(this.state.matchedUsers.results.fifthEd.players[i].gamestyle.roleplay, 'here is the state of matchedUsers in MatchedUsersContainer');

			if (this.state.matchedUsers.results[key].players) {
				playerList = this.state.matchedUsers.results[key].players.map((player, j) => {
					return(
						<div key={key + "-player-" + player._id}>
							<div> {player.username} </div>
							<Button variant="outline-danger" data-key={key} data-player-index={j} onClick={this.setMatchedUserShow}> View Player Details </Button>
						</div>
					)
				})
			}
			// need to figure out why the below doesn't work maybe something in the backend?

			let gamemasterList = null;

			if (this.state.matchedUsers.results[key].gamemasters) {
				gamemasterList = this.state.matchedUsers.results[key].gamemasters.map((gamemaster, k) => {
					return(
						<div key={key + "-gamemaster-" + gamemaster._id}>
							<div> {gamemaster.username}</div>
							<Button variant="outline-danger" data-key={key} data-gamemaster-index={k} onClick={this.setMatchedUserShow}> View GameMaster Details </Button>
						</div>
						)
					})
			}

			return(
				<div>
					<strong key={"gamesystem-" + i}>
						{key}
					</strong>
					<div>
						<p> Players: </p>
						{playerList ? <div> {playerList} </div> : <p> No players matched for {key} </p>}
					</div>
					<div>
						<p> Game Masters: </p>
						{gamemasterList ? <div> {gamemasterList} </div> : <p> No game masters matched for {key} </p>}
					</div>
				</div>
			)
		})
	
		return(
			<Container className="matchedUsers">
				<div> 
					{!this.state.matchedUserShow ? <div>{gameSystemsList} </div> : null}
					{this.state.matchedUserShow ? <MatchedUser matchedUserShow={this.state.matchedUserShow} clearMatchedUserShow={this.clearMatchedUserShow}/> : null}
					{this.state.matchedUserShowGM ? <MatchedUserGM matchedUserShow={this.state.matchedUserShow} matchedUserShowGM={this.state.matchedUserShowGM} clearMatchedUserShow={this.clearMatchedUserShow}/> : null}
				
			 	</div>
			 </Container>
			)
		// {!this.state.matchedUserShow
		//  ? 
		 // <div>{userList}</div>
		//  : null}
		 // {this.state.matchedUserShow === true ? <matchedUser/> : null }
			
	}
}





export default MatchedUsersContainer;