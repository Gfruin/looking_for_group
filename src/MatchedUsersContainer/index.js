import React, {Component} from 'react'
// import ShowMatchedUser from '../ShowMatchedUser'

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
		const playerIndex = e.currentTarget.dataset.playerIndex

		console.log(key)
		console.log(playerIndex)

		const player = this.state.matchedUsers.results[key].players[playerIndex]

		console.log("here is the player:")
		console.log(player)

		const gamemasterIndex = e.currentTarget.dataset.gamemasterIndex

		const gamemaster = this.state.matchedUsers.results[key].gamemasters[gamemasterIndex]

		this.setState({
			matchedUserShow: player,
			matchedUserShowGM: gamemaster
		})
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

		const gameSystemsList = (Object).keys(this.state.matchedUsers.results).map((key, i) => {
			// console.log(this.state.matchedUsers.results.fifthEd.players[i].gamestyle.roleplay, 'here is the state of matchedUsers in MatchedUsersContainer');
			

			const playerList = this.state.matchedUsers.results[key].players.map((player, j) => {
				return(
					<div key={player._id}>
						<div> {player.username} </div>
						<button data-key={key} data-player-index={j} onClick={this.setMatchedUserShow}> View Player Details </button>
					</div>
				)
			})

			const gamemasterList = this.state.matchedUsers.results[key].gamemasters.map((gamemaster, k) => {
				return(
					<div key={gamemaster._id}>
						<div> {gamemaster.username}</div>
						<button data-key={key} data-gamemaster-index={k} onClick={this.setMatchedUserShow}> View GameMaster Details </button>
					</div>
					)
			})

			return(
				<div>
					<strong key={"gamesystem-" + i}>
						{key}
					</strong>
					<ul>
						{playerList}
						{gamemasterList}
					</ul>
				</div>
			)
		})
	
		return(
			<div> 
				{!this.state.matchedUserShow ? <div>{gameSystemsList}</div> : null}
				
			 </div> 
			)
		// {!this.state.matchedUserShow
		//  ? 
		 // <div>{userList}</div>
		//  : null}
		 // {this.state.matchedUserShow === true ? <matchedUser/> : null }
			
	}
}





export default MatchedUsersContainer;