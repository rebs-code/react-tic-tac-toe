import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(!isEditing);
    console.log(isEditing);
  }

  let shownElement = <span className="player-name">{name}</span>;
  let buttonText = "Edit";

  if (isEditing) {
    shownElement = <input type="text" required />;
    buttonText = "Save";
  }

  return (
    <li>
      <span className="player">
        {shownElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonText}</button>
    </li>
  );
}
