import React from 'react'

const MatchedUsers = (props) => {
	console.log(props.matchedUsers);
	const matchedUserList = props.matchedUsers.map((user) => {
		return(
			<div>
				<h2>{user.username}</h2>
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