import React from 'react'

const EditUser = (props) => {
	return(
		<div>
			<h4> Edit User </h4>
			<form>
				<label>
          		GameMaster or Player (You can choose both):
          		<input name="gamemaster" type="checkbox" checked={userToEdit.gamemaster} onChange={props.handleInputChange} />
          		<input name="playerCharacter" type="checkbox" checked={userToEdit.playerCharacter} onChange={props.handleInputChange} />
				</label>
				<label>
				What GameSystem do you enjoy playing?
				Dungeons and Dragons 5e:
          		<input name="dnd5e" type="checkbox" checked={userToEdit.gamesystem.dnd5e} onChange={props.handleInputChange} />
          		Pathfinder:
          		<input name="pathfinder" type="checkbox" checked={userToEdit.gamesystem.pathfinder} onChange={props.handleInputChange} />
          		StarFinder:
          		<input name="starfinder" type="checkbox" checked={userToEdit.gamesystem.starfinder} onChange={props.handleInputChange} />
          		Dungeons and Dragons 3.5:
          		<input name="dnd3_5" type="checkbox" checked={userToEdit.gamesystem.dnd3_5} onChange={props.handleInputChange} />
          		Call of Cthulhu:
          		<input name="callOfCthulu" type="checkbox" checked={userToEdit.gamesystem.callOfCthulu} onChange={props.handleInputChange} />
          		Other:
          		<input name="othergamesystem" type="text" value={props.userToEdit} onChange={props.handleFormChange} />
          		<label>
          		Choose Your Preferred Gameplay Style:
          		Roleplay (gameplay with a focus on collaborative storytelling)
          		<input name="roleplay" type="checkbox" checked={userToEdit.gamestyle.roleplay} onChange={props.handleInputChange} />
          		Combat (a game with a focus on fighting monsters and villians)
          		<input name="combat" type="checkbox" checked={userToEdit.gamestyle.combat} onChange={props.handleInputChange} />
          		Dungeon Crawl (a game with a focus on exploring elaborate maps with traps, monsters, and treasure!)
          		<input name="dungeonCrawl" type="checkbox" checked={userToEdit.gamestyle.dungeonCrawl} onChange={props.handleInputChange} />
          		Other
          		<input name="othergamestyle" type="text" value={props.userToEdit} onChange={props.handleFormChange} />
 
				</label>
				</label>
				<label>
				Years of Experience
				<input type="number" name="experience" onChange={props.handleFormChange} value={props.userToEdit}/>
				</label>
				<label>
				What Game Materials do you have? (i.e. dice, maps, miniatures, etc)
				<textarea type="text" name="gameMaterials" onChange={props.handleFormChange} value={props.userToEdit}/>
				</label>
				<label>
				Your Description:
				<textarea type="text" name="description" onChange={props.handleFormChange} value={props.userToEdit}/>
				</label>
				<label>
				First Name:
				<input type="text" name="firstName" onChange={props.handleFormChange} value={props.userToEdit}/>
				</label>
				<label>
				Last Name:
				<input type="text" name="lastName" onChange={props.handleFormChange} value={props.userToEdit}/>
				</label>
				<label>
				Reset Password:
				<input type="text" name="password" onChange={props.handleFormChange} value={props.userToEdit}/>
				</label>
				<label>
				Reset Username:
				<input type="text" name="username" onChange={props.handleFormChange} value={props.userToEdit}/>
				</label>
				<label>
				Reset Email:
				<input type="text" name="email" onChange={props.handleFormChange} value={props.userToEdit}/>
				</label>
				<label>
				Address:
				<input type="text" name="address" onChange={props.handleFormChange} value={props.userToEdit}/>
				</label>			


			</form>
		</div>

		)
}