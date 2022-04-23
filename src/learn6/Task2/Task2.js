import React, { useState } from "react"
import { TextField, Box, Typography } from "@mui/material"


const Task2 = () => {

    const [value, setValue] = useState('')

    return (
        <Box>
            <TextField onChange={(event) => { setValue(event.target.value) }} />
            <Typography variant='h6'>{value}</Typography>
        </Box>
    )
}

export default Task2