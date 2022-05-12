import { TextField } from "@mui/material"
import { useState } from "react"

const Lesson29 = () => {
    const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e'])
    const [editNum, setEditNum] = useState(null)

    const changeItem = (event) => {
        setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)
        ])
    }
    const handleBlur = () => {

        setEditNum('')
    }
    return (
        <div>
            {notes.map((note, index) =>
                <p key={index} onClick={() => setEditNum(index)}>{note}</p>
            )}
            <TextField value={editNum ? notes[editNum] : ''} onChange={changeItem} onBlur={handleBlur}>


            </TextField>
        </div>
    )
}
export default Lesson29