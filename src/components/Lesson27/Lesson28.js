import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react"

const getSum = (arr) => {
    let sum = 0;
    let result = 0;
    for (const elem of arr) {
        sum += elem
        result = sum / 9;


    }
    return result
}

const Lesson28 = () => {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const changeHandler = (index, event) => {
        setNotes([...notes.slice(0, index), +event.target.value, ...notes.slice(index + 1)])
    }
    return (
        <div>

            <TextField value={notes[0]} onChange={event => changeHandler(0, event)} />
            <TextField value={notes[1]} onChange={event => changeHandler(1, event)} />
            <TextField value={notes[2]} onChange={event => changeHandler(2, event)} />
            <TextField value={notes[3]} onChange={event => changeHandler(3, event)} />
            <TextField value={notes[4]} onChange={event => changeHandler(4, event)} />
            <TextField value={notes[5]} onChange={event => changeHandler(5, event)} />
            <TextField value={notes[6]} onChange={event => changeHandler(6, event)} />
            <TextField value={notes[7]} onChange={event => changeHandler(7, event)} />
            <TextField value={notes[8]} onChange={event => changeHandler(8, event)} />
            <Box> {getSum(notes)}</Box>
        </div>
    )
}
export default Lesson28