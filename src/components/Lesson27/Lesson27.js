import { Button, Typography } from "@mui/material"
import { useState } from "react"



const Lesson27 = () => {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5])

    const remItem = (index) => {
        const copyNotes = [...notes];
        setNotes([...copyNotes.slice(0, index),
        ...copyNotes.slice(index + 1)]
        )
    }

    return (
        <div>
            {notes.map((note, index) =>

                <div>
                    <Typography key={index}>
                        {note}
                    </Typography>
                    <Button onClick={() => { remItem(index) }}>remove</Button>
                </div>

            )}
        </div>
    )
}
export default Lesson27