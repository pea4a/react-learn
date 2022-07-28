import { Button, Typography } from "@mui/material"
import { useState } from "react"

const Lesson27 = () => {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5])

    const remItem = (index) => {
        const copyNotes = [...notes];

        copyNotes.splice(index, 1)

        setNotes(copyNotes)
    }

    return (
        <div>
            {notes.map((note, index) =>
                <div key={index}>
                    <Typography >
                        {note}
                    </Typography>
                    <Button onClick={() => { remItem(index) }}>remove</Button>
                </div>
            )}
        </div>
    )
}
export default Lesson27