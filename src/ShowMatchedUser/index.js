import React from 'react'


const MatchedUser = (props) => {
	console.log(props.matchedUserShow);
	return (
		<div>
			<button onClick={props.clearMatchedUserShow}> Return to List </button>
			<h2> Username: {props.matchedUserShow.username} </h2>
			<p> Email: {props.matchedUserShow.email}</p>
			<h3>GameSystems</h3>
			<p> Dungeons and Dragons Fifth Edition: {props.matchedUserShow.gamesystem.dnd5e.toString()}</p>
			<p> Pathfinder: {props.matchedUserShow.gamesystem.pathfinder.toString()}</p>
			<p> Starfinder: {props.matchedUserShow.gamesystem.starfinder.toString()}</p>
			<p>Dungeons and Dragons 3.5 Edition: {props.matchedUserShow.gamesystem.dnd3_5.toString()}</p>
			<p>Call of Cthulhu: {props.matchedUserShow.gamesystem.callOfCthulu.toString()}</p>
			<h3>GameStyles</h3>
			<p> Roleplay: {props.matchedUserShow.gamestyle.roleplay.toString()}</p>
			<p> Combat: {props.matchedUserShow.gamestyle.combat.toString()}</p>
			<p> Dungeon Crawl: {props.matchedUserShow.gamestyle.dungeonCrawl.toString()}</p>
			<p> Years of Experience: {props.matchedUserShow.experience}</p>
			<p> Game Materials: {props.matchedUserShow.gameMaterials}</p>
			<p> Description: {props.matchedUserShow.description}</p>
			<button onClick={props.clearMatchedUserShow}> Return to List </button>

		</div>
		)
}


export default MatchedUser