				
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


{this.state.matchedUserShowGM ? <MatchedUserGM matchedUserShowGM={this.state.matchedUserShowGM}/> : null}


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


 // setUserToEdit = (user, e) => {
    //   console.log(user, 'here is the user in setUserToEdit in App.js');
    //   this.setState({ 
    //     // username: user.username,
    //     // email: user.email,
    //     // _id: user._id,
    //     // logged: true, 
    //     // registered: true,
    //     _id: user,
    //     gamemaster: user.gamemaster,
    //     playerCharacter: user.playerCharacter,
    //     lookingForGroup: user.lookingForGroup,
    //     gameMaterials: user.gameMaterials,
    //     experience: user.experience,
    //     description: user.description,
    //     firstName: user.firstName,
    //     lastName: user.lastName,
    //     address: user.location.address,
    //     latitude: user.location.latitude,
    //     longitude: user.location.longitude,
    //     zipCode: user.location.zipCode,
    //     dnd5e: user.gamesystem.dnd5e,
    //     pathfinder: user.gamesystem.pathfinder,
    //     starfinder: user.gamesystem.starfinder,
    //     dnd3_5: user.gamesystem.dnd3_5,
    //     callOfCthulu: user.gamesystem.callOfCthulu,
    //     other: user.gamesystem.other,
    //     roleplay: user.gamestyle.roleplay,
    //     combat: user.gamestyle.combat,
    //     dungeonCrawl: user.gamestyle.dungeonCrawl,
    //     other: user.gamestyle.other,
    //   // "userToEdit._id": _id,
    //   // "userToEdit.username": username,
    //   // "userToEdit.password": password,
    //   // "userToEdit.email": email,
    //   })
    // }


//what my userContainer used to look like with nested objects in state

// class UserContainer extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			users: [],
// 			matchedUsers: [],
// 			userToEdit: {
// 				id: null,
// 				gamemaster: false,
// 				playerCharacter: true,
// 				lookingForGroup: true,
// 				gameMaterials: '',
// 				experience: null,
// 				description: '',
// 				firstName: '',
// 				lastName: '',
// 				password: '',
// 				username: {
// 					type: '',
// 					unique: true
// 				},
// 				email: {
// 					type: '',
// 					unique: true
// 				},
// 				location: {
// 					address: '',
// 					latitude: '',
// 					longitude: '',
// 					zipCode: ''
// 				},
// 				gamesystem: {
// 					dnd5e: false,
// 					pathfinder: false,
// 					starfinder: false,
// 					dnd3_5: false,
// 					callOfCthulu: false,
// 					other: '',
// 				},
// 				gamestyle: {
// 					roleplay: false,
// 					combat: false,
// 					dungeonCrawl: false,
// 					other: ''
// 				},
// 				showUser: false,

// 			}
// 		}
// 	}


//delete route binding

// <button onClick={props.deleteUser.bind(null, props.userToEdit._id)}>Delete Profile</button> 

