import React from 'react'

const UserProfile = (props) => {
	console.log(props.currentUser, 'here is the currentUser');
	return(
		<div>
			<p>{props.currentUser.username}</p>
			<p>{props.currentUser.email}</p>
			<p>{props.currentUser.gamemaster}</p>
			<p>{props.currentUser.playerCharacter}</p>
			<p>{props.currentUser.lookingForGroup}</p>
			<p>{Object.keys(props.currentUser.gamesystem)}</p>
			
			
			<p></p>
			<p></p>
			<p></p>
			<p></p>
			<p></p>
			<p></p>

		</div>
		)
}

export default UserProfile