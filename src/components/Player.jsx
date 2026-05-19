import { useState } from "react";

export default function Player({ initialName, score, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input 
        type="text"
        required
        value={playerName}
        onChange={handleChange} 
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-score"> Matches: {score} </span>
      </span>
      <button onClick={handleEditClick}>
        {isEditing ? "Save" : "Edit"}

      </button>
    </li>
  );
}