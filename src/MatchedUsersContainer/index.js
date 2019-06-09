import React, {Component} from 'react'
// import ShowMatchedUser from '../ShowMatchedUser'

class MatchedUsersContainer extends Component {
	constructor(props) {
		super();
		this.state = {
			matchedUsers: props.matchedUsers,
			matchedUserShow: null
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

		this.setState({
			matchedUserShow: player
		})
	}
	clearMatchedUserShow = () => {
		this.setState({
			matchedUserShow: null
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
						<li> {player.username} </li>
						<button data-key={key} data-player-index={j} onClick={this.setMatchedUserShow}> View Player Details </button>
					</div>
				)
			})

			return(
				<div>
					<div key={"gamesystem-" + i}>
						{key}
					</div>
					<ul>
						{playerList}
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



// < div> 
// 						<h3>D&D Fifth Edition Players:</h3>
// 						<br/>
// 							Usernames:
// 							{this.state.matchedUsers.results.fifthEd.players[i].username}
// 						<br/>
// 							Gamestyle: Roleplay {this.state.matchedUsers.results.fifthEd.players[i].gamestyle.roleplay}
// 						<br/>
// 							Gamestyle: Combat {this.state.matchedUsers.results.fifthEd.players[i].gamestyle.combat}

// 						<br/>
// 							Gamestyle: Dungeon Crawl {this.state.matchedUsers.results.fifthEd.players[i].gamestyle.dungeonCrawl}

// 						<br/>

// 					</div>
// 					<div></div>
// 					<div></div>
// 					<div></div>


export default MatchedUsersContainer;