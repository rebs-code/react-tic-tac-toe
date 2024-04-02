import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;
  let buttonText = "Edit";

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    buttonText = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonText}</button>
    </li>
  );
}
