import React from 'react'

const EditUser = (props) => {
	console.log(props.userToEdit, 'here is the props.userToEdit in EditUser');
	console.log(props.userToEdit.gamesystem, 'here are the props.userToEdit.gamesystem');
	console.log(props.userToEdit.gamesystem.dnd5e, 'here are the props.userToEdit.gamesystem.dnd5e');
	return(
		<div>
			<h4> Edit User </h4>
			<form onSubmit={props.closeAndEdit}>
				<label>
          		GameMaster or Player (You can choose both): <br/>
          		GameMaster:
          		<input name="gamemaster" type="checkbox" value={props.userToEdit.gamemaster} checked={props.userToEdit.gamemaster === false ? false : true} onChange={props.handleInputChange}/> <br/>
          		Player:
          		<input name="playerCharacter" type="checkbox" value={props.userToEdit.playerCharacter} checked={props.userToEdit.playerCharacter === false ? false : true} onChange={props.handleInputChange}/> <br/>
				</label>
				<label>
				What GameSystem do you enjoy playing? <br/>
				
				Dungeons and Dragons 5e:
          		<input name="dnd5e" type="checkbox" value={props.userToEdit.gamesystem} checked={props.userToEdit.gamesystem === false ? false : true} onChange={props.handleInputChange}/> <br/>
          		Pathfinder:
          		<input name="pathfinder" type="checkbox" value={props.userToEdit.gamesystem.pathfinder} checked={props.userToEdit.gamesystem.pathfinder === false ? false : true} onChange={props.handleInputChange}/> <br/>
          		StarFinder:
          		<input name="starfinder" type="checkbox" value={props.userToEdit.gamesystem.starfinder} checked={props.userToEdit.gamesystem.starfinder === false ? false : true} onChange={props.handleInputChange}/> <br/>
          		Dungeons and Dragons 3.5:
          		<input name="dnd3_5" type="checkbox" value={props.userToEdit.gamesystem.dnd3_5} checked={props.userToEdit.gamesystem.dnd3_5 === false ? false : true} onChange={props.handleInputChange}/> <br/>
          		Call of Cthulhu:
          		<input name="callOfCthulu" type="checkbox" value={props.userToEdit.gamesystem.callOfCthulu} checked={props.userToEdit.gamesystem.callOfCthulu === false ? false : true} onChange={props.handleInputChange}/> <br/>
          		</label>
          		<label>
          		Other:
          		<input name="othergamesystem" type="text" value={props.userToEdit.gamesystem.other} onChange={props.handleFormChange} /> <br/>
          		</label>	
          		<label>
          		Choose Your Preferred Gameplay Style: <br/>
          		Roleplay (gameplay with a focus on collaborative storytelling)
          		<input name="roleplay" type="checkbox" value={props.userToEdit.gamestyle.roleplay} checked={props.userToEdit.gamestyle.roleplay === false ? false : true} onChange={props.handleInputChange} /> <br/>
          		Combat (a game with a focus on fighting monsters and villians)
          		<input name="combat" type="checkbox" value={props.userToEdit.gamestyle.combat} checked={props.userToEdit.gamestyle.combat === false ? false : true} onChange={props.handleInputChange} /> <br/>
          		Dungeon Crawl (a game with a focus on exploring elaborate maps with traps, monsters, and treasure!)
          		<input name="dungeonCrawl" type="checkbox" value={props.userToEdit.gamestyle.dungeonCrawl} checked={props.userToEdit.gamestyle.dungeonCrawl === false ? false : true} onChange={props.handleInputChange} /> <br/>
          		Other
          		<input name="othergamestyle" type="text" value={props.userToEdit.gamestyle.other} onChange={props.handleFormChange} /> <br/>
				</label>
				<label>
				Years of Experience
				<input type="number" name="experience" onChange={props.handleFormChange} value={props.userToEdit.experience}/> <br/>
				</label>
				<label>
				What Game Materials do you have? (i.e. dice, maps, miniatures, etc)
				<textarea type="text" name="gameMaterials" onChange={props.handleFormChange} value={props.userToEdit.gameMaterials}/> <br/>
				</label>
				<label>
				Your Description:
				<textarea type="text" name="description" onChange={props.handleFormChange} value={props.userToEdit.description}/> <br/>
				</label>
				<label>
				First Name:
				<input type="text" name="firstName" onChange={props.handleFormChange} value={props.userToEdit.firstName}/> <br/>
				</label>
				<label>
				Last Name:
				<input type="text" name="lastName" onChange={props.handleFormChange} value={props.userToEdit.lastName}/> <br/>
				</label>
				<label>
				Address:
				<input type="text" name="address" onChange={props.handleFormChange} value={props.userToEdit.address}/> <br/>
				</label>			
				<button>Submit</button>
			</form>
		</div>

		)
}


export default EditUser;