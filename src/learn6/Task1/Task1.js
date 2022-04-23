import { TextField, Box, Typography } from "@mui/material"
import React, { useState } from "react"
import useStyles from "./styles"

const Task1 = () => {
    const classes = useStyles()

    const [value, setValue] = useState('')

    return (
        <Box className={classes.root}>
            <TextField className={classes.input} onChange={(event) => { setValue(event.target.value) }} />
            <Typography variant='h1'>{value}</Typography>
        </Box>
    )
}

export default Task1