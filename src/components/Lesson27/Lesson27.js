import { useState } from "react"



const Lesson27 = () => {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5])


    const result = notes.map((note, index) => {
        return <p key={index}>
            {note}
        </p>
    })
    return (
        <p>ddd</p>
    )
}
export default Lesson27