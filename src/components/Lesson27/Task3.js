import React, { useState } from "react";
import { Button, TextField, Typography, Box, Checkbox, Select, MenuItem, Radio } from "@mui/material";
import ReactDatePicker from "react-datepicker";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// const Task3 = () => {
//     const [value, setValue] = useState('')

//     return (
//         <Box>
//             <TextField onChange={(event) => setValue(event.target.value)}></TextField>
//             <Typography variant="h6">{value.toUpperCase()}</Typography>
//         </Box>
//     )
// }



// const Task3 = () => {
//     const [value, setValue] = useState('')

//     return (
//         <Box>
//             <TextField onChange={(event) => setValue(event.target.value.split(' '))} />
//             <Typography>{value[0]}</Typography>
//             <Typography>{value[1]}</Typography>
//             <Typography>{value[2]}</Typography>
//         </Box>
//     )
// }

// const Task3 = () => {
//     const [inputValue, setInputValue] = useState('')
//     const [data, setData] = useState('')

//     const onSubmit = (event) => {
//         event.preventDefault()
//         setText(inputValue)
//     }

//     return (
//         <Box>
//             <form onSubmit={onSubmit}>
//                 <TextField onChange={(event) => setInputValue(event.target.value)} />
//                 <Button type='submit' variant="contained">submit</Button>
//             </form>
//             <Typography>{text}</Typography>
//         </Box>
//     )
// }

// const Task3 = () => {
//     const [inputNumber, setInputNumber] = useState({
//         fristNumber: '',
//         secondNumber: '',
//     })
//     const [sum, setSum] = useState('')

//     const handelInput = ({ target: { name, value } }) => {
//         const copyInputNumber = { ...inputNumber }

//         copyInputNumber[name] = value

//         setInputNumber(copyInputNumber)
//     }

//     const handleCalculator = (event) => {
//         event.preventDefault()
//         setSum(+inputNumber.fristNumber + +inputNumber.secondNumber)
//     }

//     return (
//         <Box>
//             <form onSubmit={handleCalculator}>
//                 <TextField value={inputNumber.fristNumber} name="fristNumber" onChange={handelInput} />
//                 <TextField value={inputNumber.secondNumber} name="secondNumber" onChange={handelInput} />
//                 <Button type="submit" variant="contained">submit</Button>
//                 <Typography>{sum}</Typography>
//             </form>
//         </Box>
//     )

// }

const Task3 = () => {
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [thirdName, setThirdName] = useState('')
    const [value, setValue] = useState('')

    const handleShower = (event) => {
        event.preventDefault()
        setValue(firstName + ' ' + secondName + ' ' + thirdName)
    }
    return (
        <Box>
            <form onSubmit={handleShower}>
                <TextField onChange={(event) => setFirstName(event.target.value)} />
                <TextField onChange={(event) => setSecondName(event.target.value)} />
                <TextField onChange={(event) => setThirdName(event.target.value)} />
                <Button type="submit" variant="contained">submit</Button>
                <Typography>{value}</Typography>
            </form>
        </Box>
    )
}

// const Task3 = () => {
//     const [value, setValue] = useState()
//     const [names, setNames] = useState(['first', 'second', 'third', 'fourth'])

//     const handleAdder = () => {
//         const copyNames = names;
//         if (value !== '') { copyNames.push(value) }
//         setNames(copyNames)
//         console.log(copyNames);
//         setValue('')
//     }

//     const valueExporter = (event) => {
//         setValue(event.target.value)
//         console.log(value);
//     }

//     const remItem = (index) => {
//         const copyNames = [...names];
//         setNames([...copyNames.slice(0, index),
//         ...copyNames.slice(index + 1)]
//         )
//     }

//     return (
//         <Box>
//             <form>
//                 {names.map((name, index) =>
//                     <ul key={index}>
//                         <li>{name}</li>
//                         <Button onClick={() => { remItem(index) }}>remove</Button>
//                     </ul>)}
//                 <TextField value={value} onChange={valueExporter} />
//                 <Button variant="contained" onClick={handleAdder}>add</Button>
//             </form>
//         </Box>
//     )
// }

// const hrefs = [
//     { href: '1.html', text: 'ссылка 1' },
//     { href: '2.html', text: 'ссылка 2' },
//     { href: '3.html', text: 'ссылка 3' },
// ]
// const Task3 = () => {

//     const [links, setLinks] = useState(hrefs)
//     const [inputHref, setInputHref] = useState('')
//     const [inputText, setInputText] = useState('')
//     const [isTrue, setIsTrue] = useState(true)


//     const addItem = (event) => {
//         if (inputHref !== '' && inputText !== '') {
//             event.preventDefault()
//             let href = inputHref + '.html'
//             let text = inputText
//             let newObj = { href, text }
//             setLinks([...links, newObj])
//             setInputHref('')
//             setInputText('')
//             setIsTrue(true)
//         }
//         else {
//             event.preventDefault()
//             setIsTrue(false)

//         }
//     }
//     return (
//         <Box>
//             <form onSubmit={addItem}>
//                 <TextField value={inputHref} onChange={(event) => setInputHref(event.target.value)} />
//                 <TextField value={inputText} onChange={(event) => setInputText(event.target.value)} />
//                 <Button variant="contained" type="submit">apply</Button>
//                 <Typography>{isTrue ? '' : 'enter href and text'}</Typography>
//                 <ul>
//                     {links.map((link, index) =>
//                         <li key={index}>
//                             <a href={link.href}>{link.text}</a>
//                         </li>
//                     )
//                     }
//                 </ul>

//             </form>
//         </Box>
//     )
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const Task3 = () => {

//     const [nums, setNums] = useState(numbers)
//     const [textFieldValue, setTextFieldValue] = useState()




//     const remNum = () => {
//         const copyNums = [...nums]
//         if (textFieldValue !== '' && textFieldValue !== 0) {
//             setNums([...copyNums.slice(0, textFieldValue - 1), ...copyNums.slice(textFieldValue)]);
//         }

//     }

//     return (
//         <Box>
//             <form>
//                 <TextField onBlur={(event) => setTextFieldValue(+event.target.value)} />
//                 <Button variant="contained" onClick={remNum}>remove</Button>
//                 {nums.map((num, index) =>
//                     <li key={index}>{num}</li>
//                 )}

//             </form>
//         </Box>
//     )
// }
// const data = [
//     { name: 'Коля', age: 30 },
//     { name: 'Вася', age: 40 },
//     { name: 'Петя', age: 50 },
// ]
// const Task3 = () => {
//     const [users, setUsers] = useState(data)
//     const [inputName, setInputName] = useState('')
//     const [inputAge, setInputAge] = useState('')
//     const [state, setState] = useState(true)

//     const newObj = () => {
//         if (inputAge !== '' && inputAge > 0 && inputName !== '') {
//             const name = inputName
//             const age = inputAge
//             const newObj = { name, age }
//             setUsers([...users, newObj])
//             console.log(newObj);
//             setState(true)
//         }
//         else {
//             setState(false)
//         }
//     }
//     return (
//         <Box>
//             <form>
//                 <TextField onChange={(event) => setInputName(event.target.value)} />
//                 <TextField type='number' onChange={(event) => setInputAge(+event.target.value)} />
//                 <Button variant="contained" onClick={newObj}>add</Button>
//                 {users.map((user, index) =>
//                     <tr key={index}>
//                         <td>{user.name}</td><td>{user.age}</td>
//                     </tr>
//                 )}
//                 <p>{state ? '' : 'enter name and age'}</p>
//             </form>
//         </Box>
//     )
// }
// task7
// const Task3 = () => {
//     const [value, setValue] = useState('')

//     return (
//         <Box>
//             <textarea onChange={(event) => setValue(event.target.value)}></textarea>
//             <Typography>{value}</Typography>
//         </Box>
//     )
// }

// const Task3 = () => {
//     const [state, setState] = useState(true)

//     const handleChecker = () => {
//         setState(!state)
//     }
//     return (
//         <Box>
//             <Checkbox checked={state} onChange={handleChecker}></Checkbox>
//             <Typography>{state ? 'true' : 'false'}</Typography>
//         </Box>
//     )
// }


// const Task3 = () => {
//     const [value, setValue] = useState('')
//     const [numbers, setNumbers] = useState(['first', 'second', 'third', 'fourth'])

//     const handleChanger = (event) => {
//         setValue(event.target.value)
//     }
//     return (
//         <Box>
//             <Select value={value} onChange={handleChanger}>
//                 {numbers.map((number, index) =>
//                     <MenuItem key={index} value={number}>{number}</MenuItem>
//                 )}
//             </Select>
//             <Typography>{value}</Typography>
//         </Box>
//     )
// }

// const Task3 = () => {
//     const [value, setvalue] = useState()

//     const changeHandler = (event) => {
//         setvalue(event.target.value)

//     }
//     return (
//         <Box>
//             <Radio
//                 value='1'
//                 checked={value === '1' ? true : false}
//                 onChange={changeHandler}
//             />
//             <Radio
//                 value='2'
//                 checked={value === '2' ? true : false}
//                 onChange={changeHandler}
//             />
//             <Radio
//                 value='3'
//                 checked={value === '3' ? true : false}
//                 onChange={changeHandler}
//             />
//             <Typography>{
//                 value == '1' ? 'first' : (value == '2') ? 'second' : (value == '3') ? 'third' : 'none'
//             }</Typography>
//         </Box>
//     )
// }
// const Task3 = () => {
//     const [text, setText] = useState()
//     const [values, setValues] = useState([])

//     const handleAdder = () => {
//         const copyValues = values
//         const newText = text
//         copyValues.push(newText)
//         setValues(copyValues)
//         setText('')
//     }
//     return (
//         <Box>
//             <textarea value={text} onChange={(event) => setText(event.target.value)}></textarea>
//             <Button variant='contained' onClick={handleAdder}>add text</Button>
//             {values.map((value, index) =>
//                 <Typography key={index}>{value}</Typography>)}
//         </Box>
//     )

// }
// const Task3 = () => {
//     const [colorNum, setColorNum] = useState(3)
//     const [colors, setColors] = useState(['red', 'blue', 'green', 'black'])
//     return (
//         <Box>
//             <Typography color={(colorNum === 0) ? 'red' : (colorNum === 1) ? 'blue' : (colorNum === 2) ? 'green' : 'black'}>loremipsum</Typography>
//             <Select onChange={(event) => setColorNum(event.target.value)}>
//                 {colors.map((color, index) =>
//                     <MenuItem key={index} value={index}>{color}</MenuItem>
//                 )}
//             </Select>

//         </Box>
//     )
// }
// // 7.9

// const Task3 = () => {
//     const [value, setValue] = useState(true)
//     const handleChecker = (event) => {
//         setValue(event.target.value)
//     }
//     return (
//         <Box>
//             <Select value={value} onChange={handleChecker}>
//                 <MenuItem value={true}>on</MenuItem>
//                 <MenuItem value={false}>off</MenuItem>
//             </Select>
//             <Radio checked={value ? true : false}></Radio>
//         </Box>
//     )
// }
// const Task3 = () => {
//     const [text, setText] = useState('')

//     const handleChanger = (event) => {

//         if (event.target.value === 1) { //SHYALI NE RABOTAET PROSTO VALUE
//             setText('first choose')
//         }
//         if (event.target.value === 2) {
//             setText('second choose')
//         }
//         if (event.target.value === 3) {
//             setText('third choose')
//         }


//     }

//     return (
//         <Box>
//             <Select onChange={handleChanger}>
//                 <MenuItem value={1}>first</MenuItem>
//                 <MenuItem value={2}>second</MenuItem>
//                 <MenuItem value={3}>third</MenuItem>
//             </Select>
//             <Typography>{text}</Typography>
//         </Box>
//     )
// }
// const Task3 = () => {
//     const [value, setValue] = useState('')
//     const [options, setOption] = useState(['first', 'second', 'third', 'fourth'])
//     const [inputValue, setInputValue] = useState()

//     const handleChanger = (event) => {
//         setValue(event.target.value)
//     }
//     const handleAdder = (event) => {
//         event.preventDefault()
//         const copyOptions = options
//         const newItem = inputValue
//         copyOptions.push(newItem)
//         setOption(copyOptions)
//         setInputValue('')
//     }
//     return (
//         <Box>
//             <form onSubmit={handleAdder}>
//                 <TextField value={inputValue} onChange={(event) => setInputValue(event.target.value)} /><br />
//                 <Button variant="contained" type='submit' >add</Button><br />
//                 <Select value={value} onChange={handleChanger}>
//                     {options.map((option, index) =>
//                         <MenuItem key={index} value={option}>{option}</MenuItem>
//                     )}
//                 </Select>
//                 <Typography>{value}</Typography>
//             </form>
//         </Box>
//     )
// }
// const Task3 = () => {
//     const [value, setValue] = useState(true)
//     const [text, setText] = useState('')

//     const handleChanger = () => {
//         setValue(!value)
//     }
//     return (
//         <Box>
//             <Checkbox value={value} onChange={handleChanger} />
//             <TextField disabled={!value} onChange={(event) => setText(event.target.value)} />
//             <Typography>{text}</Typography>
//         </Box>
//     )

// }

// const Task3 = () => {
//     const [startDate, setStartDate] = useState(new Date());

//     return (
//         <Box>
//             <Typography>{
//                 (startDate.getDay() === 1)
//                     ? 'monday' :
//                     (startDate.getDay() === 2)
//                         ? 'tuesday' :
//                         (startDate.getDay() === 3)
//                             ? 'wednesday' :
//                             (startDate.getDay() === 4)
//                                 ? 'thursday' :
//                                 (startDate.getDay() === 5)
//                                     ? 'friday' :
//                                     (startDate.getDay() === 6)
//                                         ? 'saturday' :
//                                         'sunday'}
//             </Typography>
//             <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//         </Box>
//     );
// }
export default Task3