import React from 'react'


const EditUser = (props) => {
	console.log(props.userToEdit, 'here is the props.userToEdit in EditUser');
	console.log(props.userToEdit.dnd5e, 'here are the props.userToEdit.dnd5e');
	console.log(props.userToEdit.pathfinder, 'here are the props.userToEdit.pathfinder');
	console.log(props.userToEdit.starfinder, 'here are the props.userToEdit.starfinder');
	console.log(props.userToEdit.dnd3_5, 'here are the props.userToEdit.dnd3_5');
	console.log(props.userToEdit.callOfCthulu, 'here are the props.userToEdit.callOfCthulu');


	return(
		<div>
			<h4> Edit User </h4>
			<form onSubmit={props.closeAndEdit}>
				<div className="editUserfields">
					<label>
          			GameMaster or Player (You can choose both): <br/>
          			GameMaster:
          			<input name="gamemaster" type="checkbox" value={props.userToEdit.gamemaster} checked={props.userToEdit.gamemaster === false ? false : true} onChange={props.handleInputChange}/> <br/>
          			Player:
          			<input defaultValue={props.userToEdit.playerCharacter} name="playerCharacter" type="checkbox"  checked={props.userToEdit.playerCharacter === false ? false : true} onChange={props.handleInputChange}/> <br/>
					</label>
					<br/>
					<br/>
				</div>
				<div className="editUserfields">
					<label>
					Looking For Group?
          			<input name="lookingForGroup" type="checkbox" value={props.userToEdit.lookingForGroup} checked={props.userToEdit.lookingForGroup === false ? false : true} onChange={props.handleInputChange}/> <br/>
					</label>
					<br/>
					<br/>
				</div>
				<div className="editUserfields">
					<label>
					What GameSystem do you enjoy playing? <br/>
				
					Dungeons and Dragons 5e:
          			<input name="dnd5e" type="checkbox" value={props.userToEdit.dnd5e} checked={props.userToEdit.dnd5e === false ? false : true} onChange={props.handleInputChange}/> <br/>
          			Pathfinder:
          			<input name="pathfinder" type="checkbox" value={props.userToEdit.pathfinder} checked={props.userToEdit.pathfinder === false ? false : true} onChange={props.handleInputChange}/> <br/>
          			StarFinder:
          			<input name="starfinder" type="checkbox" value={props.userToEdit.starfinder} checked={props.userToEdit.starfinder === false ? false : true} onChange={props.handleInputChange}/> <br/>
          			Dungeons and Dragons 3.5:
          			<input name="dnd3_5" type="checkbox" value={props.userToEdit.dnd3_5} checked={props.userToEdit.dnd3_5 === false ? false : true} onChange={props.handleInputChange}/> <br/>
          			Call of Cthulhu:
          			<input name="callOfCthulu" type="checkbox" value={props.userToEdit.callOfCthulu} checked={props.userToEdit.callOfCthulu === false ? false : true} onChange={props.handleInputChange}/> <br/>
          			</label>
          			<label>
          			Other:
          			<input name="othergamesystem" type="text" value={props.userToEdit.other} onChange={props.handleFormChange} /> <br/>
          			</label>
          		</div>
          		<br/>
          		<br/>
				<div className="editUserfields">

          			<label>
          			Choose Your Preferred Gameplay Style: <br/>
          			Roleplay (gameplay with a focus on collaborative storytelling)
          			<input name="roleplay" type="checkbox" value={props.userToEdit.roleplay} checked={props.userToEdit.roleplay === false ? false : true} onChange={props.handleInputChange} /> <br/>
          			Combat (a game with a focus on fighting monsters and villians)
          			<input name="combat" type="checkbox" value={props.userToEdit.combat} checked={props.userToEdit.combat === false ? false : true} onChange={props.handleInputChange} /> <br/>
          			Dungeon Crawl (a game with a focus on exploring elaborate maps with traps, monsters, and treasure!)
          			<input name="dungeonCrawl" type="checkbox" value={props.userToEdit.dungeonCrawl} checked={props.userToEdit.dungeonCrawl === false ? false : true} onChange={props.handleInputChange} /> <br/>
          			Other
          			<input name="othergamestyle" type="text" value={props.userToEdit.other} onChange={props.handleFormChange} /> <br/>
					</label>
				</div>
          		<br/>
          		<br/>
				<div className="editUserfields">
					<label>
					Years of Experience
					<input type="number" name="experience" onChange={props.handleFormChange} value={props.userToEdit.experience}/> <br/>
					</label>
          		</div>
          			<br/>
          			<br/>
				<div className="editUserfields">

				<label>
				What Game Materials do you have? (i.e. dice, maps, miniatures, etc)
				<textarea type="text" name="gameMaterials" onChange={props.handleFormChange} value={props.userToEdit.gameMaterials}/> <br/>
				</label>
          		</div>
          		<br/>
          		<br/>
				<div className="editUserfields">
				<label>
				Your Description:
				<textarea type="text" name="description" onChange={props.handleFormChange} value={props.userToEdit.description}/> <br/>
				</label>
          		</div>
          		<br/>
          		<br/>
				<div className="editUserfields">

				<label>
				First Name:
				<input type="text" name="firstName" onChange={props.handleFormChange} value={props.userToEdit.firstName}/> <br/>
				</label>
          		</div>
          		<br/>
          		<br/>
				<div className="editUserfields">
				<label>
				Last Name:
				<input type="text" name="lastName" onChange={props.handleFormChange} value={props.userToEdit.lastName}/> <br/>
				</label>
				</div>
          		<br/>
          		<br/>
				<div className="editUserfields">

				<label>
				Address:
				<input type="text" name="address" onChange={props.handleFormChange} value={props.userToEdit.address}/> <br/>
				</label>
				</div>
          		<br/>

				<button>Submit</button>
				<br/>
				<br/>
			</form>
				<button onClick={props.deleteUser.bind(null, props.userToEdit._id)}>Delete Profile</button> 
		</div>

		)
}


export default EditUser;