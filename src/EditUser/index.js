import React from 'react'

const EditUser = (props) => {
	return(
		<div>
			<h4> Edit User </h4>
			<form onSubmit={props.closeAndEdit}>
				<label>
          		GameMaster or Player (You can choose both): <br/>
          		GameMaster:
          		<input name="gamemaster" type="checkbox" value={"props.userToEdit.gamemaster"} onChange={props.handleInputChange} /> <br/>
          		Player:
          		<input name="playerCharacter" type="checkbox" value={"props.userToEdit.playerCharacter"} onChange={props.handleInputChange} /> <br/>
				</label>
				<label>
				What GameSystem do you enjoy playing? <br/>
				Dungeons and Dragons 5e:
          		<input name="dnd5e" type="checkbox" value={"props.userToEdit.gamesystem.dnd5e"} onChange={props.handleInputChange} /> <br/>
          		Pathfinder:
          		<input name="pathfinder" type="checkbox" value={"props.userToEdit.gamesystem.pathfinder"} onChange={props.handleInputChange} /> <br/>
          		StarFinder:
          		<input name="starfinder" type="checkbox" value={"props.userToEdit.gamesystem.starfinder"} onChange={props.handleInputChange} /> <br/>
          		Dungeons and Dragons 3.5:
          		<input name="dnd3_5" type="checkbox" value={"props.userToEdit.gamesystem.dnd3_5"} onChange={props.handleInputChange} /> <br/>
          		Call of Cthulhu:
          		<input name="callOfCthulu" type="checkbox" value={"props.userToEdit.gamesystem.callOfCthulu"} onChange={props.handleInputChange} /> <br/>
          		Other:
          		<input name="othergamesystem" type="text" value={props.userToEdit} onChange={props.handleFormChange} /> <br/>
          		<label>
          		Choose Your Preferred Gameplay Style: <br/>
          		Roleplay (gameplay with a focus on collaborative storytelling)
          		<input name="roleplay" type="checkbox" value={"props.userToEdit.gamestyle.roleplay"} onChange={props.handleInputChange} /> <br/>
          		Combat (a game with a focus on fighting monsters and villians)
          		<input name="combat" type="checkbox" value={"props.userToEdit.gamestyle.combat"} onChange={props.handleInputChange} /> <br/>
          		Dungeon Crawl (a game with a focus on exploring elaborate maps with traps, monsters, and treasure!)
          		<input name="dungeonCrawl" type="checkbox" value={"props.userToEdit.gamestyle.dungeonCrawl"} onChange={props.handleInputChange} /> <br/>
          		Other
          		<input name="othergamestyle" type="text" value={props.userToEdit} onChange={props.handleFormChange} /> <br/>
 
				</label>
				</label>
				<label>
				Years of Experience
				<input type="number" name="experience" onChange={props.handleFormChange} value={props.userToEdit}/> <br/>
				</label>
				<label>
				What Game Materials do you have? (i.e. dice, maps, miniatures, etc)
				<textarea type="text" name="gameMaterials" onChange={props.handleFormChange} value={props.userToEdit}/> <br/>
				</label>
				<label>
				Your Description:
				<textarea type="text" name="description" onChange={props.handleFormChange} value={props.userToEdit}/> <br/>
				</label>
				<label>
				First Name:
				<input type="text" name="firstName" onChange={props.handleFormChange} value={props.userToEdit}/> <br/>
				</label>
				<label>
				Last Name:
				<input type="text" name="lastName" onChange={props.handleFormChange} value={props.userToEdit}/> <br/>
				</label>
				<label>
				Reset Password:
				<input type="text" name="password" onChange={props.handleFormChange} value={props.userToEdit}/> <br/>
				</label>
				<label>
				Reset Username:
				<input type="text" name="username" onChange={props.handleFormChange} value={props.userToEdit}/> <br/>
				</label>
				<label>
				Reset Email:
				<input type="text" name="email" onChange={props.handleFormChange} value={props.userToEdit}/> <br/>
				</label>
				<label>
				Address:
				<input type="text" name="address" onChange={props.handleFormChange} value={props.userToEdit}/> <br/>
				</label>			
				<button>Submit</button>
			</form>
		</div>

		)
}


export default EditUser;