import { useState } from "react";
function Player({initialName, symbol}){
    // 사용자 수정
    const [isEditing,setIsEditing] = useState(false);
    function handleEditClick() {
        setIsEditing((edting)=> !edting)
    }
    // 사용자 이름 입력
    const [playerName,setPlayName] = useState(initialName);
    function handleChange(event){
        setPlayName(event.target.value);
    }

    // 사용자 이름
    let editablePlayName = <span className="player-name">{playerName}</span>;
    let btnCaption = 'Edit';
    
    if (isEditing){
        editablePlayName = <input type="text" required value={playerName} onChange={handleChange} ></input>;
        btnCaption = 'Save';
    }

    return (
        <li>
            <span className="player">
                {editablePlayName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {btnCaption}
            </button>
        </li>
    )
}

export default Player;