				
///Take from the EditUser index.js; will refactor in later

				// <label>
				// Reset Password:
				// <input type="text" name="password" onChange={props.handleFormChange} value={props.userToEdit}/> <br/>
				// </label>
				// <label>
				// Reset Username:
				// <input type="text" name="username" onChange={props.handleFormChange} value={props.userToEdit}/> <br/>
				// </label>
				// <label>
				// Reset Email:
				// <input type="text" name="email" onChange={props.handleFormChange} value={props.userToEdit}/> <br/>
				// </label>




// _renderObject(){
//     return Object.keys(props.currentUser).map(currentUser, i) => {
//         return (
//             <div>
//                 username is: {props.currentUser[currentUser].username} ;
//                 name is: {props.currentUser[currentUser].gamesystem}
//             </div>
//         )
//     })
// }


// 	return Object.keys(props.currentUser).map((currentUser, i) => {
//         return (
//             <div>
//                 {props.currentUser[currentUser].gamesystem}
//                 {props.currentUser[currentUser].gamestyle}
//             </div>
//         )
//     })
// }




// const MatchedUsers = (props) => {
// 	console.log(props.matchedUsers);
// 	const matchedUserList = Object.keys(props.matchedUsers).map((user, i) => {
// 		console.log(props.matchedUsers.results.dnd3_5.players.username, 'here are the matchedUsers.results.dnd3_5.players');
// 		return(
// 			<div key={i}>
// 				<h2>{user.gamesystem}</h2>
// 				<p>GameMaster?{user.gamemaster}</p>
// 				<p>Player?{user.playerCharacter}</p>
// 				<p>{}</p>
// 				<p>{}</p>
				

// 			</div>
// 			)
// 	})
// 	return(
// 		<ul>
// 			{matchedUserList}
// 		</ul>

// 		)
// }


// import React, {Component} from 'react'

// class MatchedUsersContainer extends Component {
// 	constructor(props) {
// 		super()
// 		this.state({
// 			matchedUsers: props.matchedUsers,
// 			matchedUserShow: null
// 		})
// 	}
// }


// export default MatchedUsersContainer;


/// THIS GOES IN THE RENDER OF MATCHEDUSERS CONTAINER------->>>>>>
//it will display the matched user if the client wants to see more of that user's profile
{this.state.matchedUserShow ? <ShowMatchedUser matchedUserShow={this.state.matchedUserShow} clearMatchedUserShow={this.clearMatchedUserShow} /> : null}





//BELOW "data-player" uses something called a "data-set" LOOK THIS UPPPPPPPP
// <button data-key={key} data-player-index={j} onClick={this.setMatchedUserShow}> View Player Details </button>


///----------CODE FROM MATCHEDUSERSCONTAINER-----------//////

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








