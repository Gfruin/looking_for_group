import React from 'react'

const MatchedUsers = (props) => {
	console.log(props.matchedUsers);
	const matchedUserList = Object.keys(props.matchedUsers).map((user, i) => {
		console.log(props.matchedUsers.results.dnd3_5.players.username, 'here are the matchedUsers.results.dnd3_5.players');
		return(
			<div key={i}>
				<h2>{user.gamesystem}</h2>
				<p>GameMaster?{user.gamemaster}</p>
				<p>Player?{user.playerCharacter}</p>
				<p>{}</p>
				<p>{}</p>
				

			</div>
			)
	})
	return(
		<ul>
			{matchedUserList}
		</ul>

		)
}


export default MatchedUsers