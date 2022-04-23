import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    root: {
        margin: '10px',

        "& .MuiOutlinedInput-input": {
            color: 'red'
        }
    },

})

export default useStyles