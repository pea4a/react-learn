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
//     const [TextFieldValue, setTextFieldValue] = useState('')
//     const [data, setData] = useState('')

//     const onSubmit = (event) => {
//         event.preventDefault()
//         setText(TextFieldValue)
//     }

//     return (
//         <Box>
//             <form onSubmit={onSubmit}>
//                 <TextField onChange={(event) => setTextFieldValue(event.target.value)} />
//                 <Button type='submit' variant="contained">submit</Button>
//             </form>
//             <Typography>{text}</Typography>
//         </Box>
//     )
// }

// const Task3 = () => {
//     const [TextFieldNumber, setTextFieldNumber] = useState({
//         fristNumber: '',
//         secondNumber: '',
//     })
//     const [sum, setSum] = useState('')

//     const handelTextField = ({ target: { name, value } }) => {
//         const copyTextFieldNumber = { ...TextFieldNumber }

//         copyTextFieldNumber[name] = value

//         setTextFieldNumber(copyTextFieldNumber)
//     }

//     const handleCalculator = (event) => {
//         event.preventDefault()
//         setSum(+TextFieldNumber.fristNumber + +TextFieldNumber.secondNumber)
//     }

//     return (
//         <Box>
//             <form onSubmit={handleCalculator}>
//                 <TextField value={TextFieldNumber.fristNumber} name="fristNumber" onChange={handelTextField} />
//                 <TextField value={TextFieldNumber.secondNumber} name="secondNumber" onChange={handelTextField} />
//                 <Button type="submit" variant="contained">submit</Button>
//                 <Typography>{sum}</Typography>
//             </form>
//         </Box>
//     )

// }

// const Task3 = () => {
//     const [firstName, setFirstName] = useState('')
//     const [secondName, setSecondName] = useState('')
//     const [thirdName, setThirdName] = useState('')
//     const [value, setValue] = useState('')

//     const handleShower = (event) => {
//         event.preventDefault()
//         setValue(firstName + ' ' + secondName + ' ' + thirdName)
//     }
//     return (
//         <Box>
//             <form onSubmit={handleShower}>
//                 <TextField onChange={(event) => setFirstName(event.target.value)} />
//                 <TextField onChange={(event) => setSecondName(event.target.value)} />
//                 <TextField onChange={(event) => setThirdName(event.target.value)} />
//                 <Button type="submit" variant="contained">submit</Button>
//                 <Typography>{value}</Typography>
//             </form>
//         </Box>
//     )
// }


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
//     const [TextFieldHref, setTextFieldHref] = useState('')
//     const [TextFieldText, setTextFieldText] = useState('')
//     const [isTrue, setIsTrue] = useState(true)


//     const addItem = (event) => {
//         if (TextFieldHref !== '' && TextFieldText !== '') {
//             event.preventDefault()
//             let href = TextFieldHref + '.html'
//             let text = TextFieldText
//             let newObj = { href, text }
//             setLinks([...links, newObj])
//             setTextFieldHref('')
//             setTextFieldText('')
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
//                 <TextField value={TextFieldHref} onChange={(event) => setTextFieldHref(event.target.value)} />
//                 <TextField value={TextFieldText} onChange={(event) => setTextFieldText(event.target.value)} />
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
//     const [TextFieldName, setTextFieldName] = useState('')
//     const [TextFieldAge, setTextFieldAge] = useState('')
//     const [state, setState] = useState(true)

//     const newObj = () => {
//         if (TextFieldAge !== '' && TextFieldAge > 0 && TextFieldName !== '') {
//             const name = TextFieldName
//             const age = TextFieldAge
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
//                 <TextField onChange={(event) => setTextFieldName(event.target.value)} />
//                 <TextField type='number' onChange={(event) => setTextFieldAge(+event.target.value)} />
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
//     const [TextFieldValue, setTextFieldValue] = useState()

//     const handleChanger = (event) => {
//         setValue(event.target.value)
//     }
//     const handleAdder = (event) => {
//         event.preventDefault()
//         const copyOptions = options
//         const newItem = TextFieldValue
//         copyOptions.push(newItem)
//         setOption(copyOptions)
//         setTextFieldValue('')
//     }
//     return (
//         <Box>
//             <form onSubmit={handleAdder}>
//                 <TextField value={TextFieldValue} onChange={(event) => setTextFieldValue(event.target.value)} /><br />
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
// const initNotes = [
//     {
//         id: 'GYi9G_uC4gBF1e2SixDvu',
//         prop1: 'value11',
//         prop2: 'value12',
//         prop3: 'value13',
//     },
//     {
//         id: 'IWSpfBPSV3SXgRF87uO74',
//         prop1: 'value21',
//         prop2: 'value22',
//         prop3: 'value23',
//     },
//     {
//         id: 'JAmjRlfQT8rLTm5tG2m1L',
//         prop1: 'value31',
//         prop2: 'value32',
//         prop3: 'value33',
//     },
// ];

// const Task3 = () => {

//     const [notes, setNotes] = useState(initNotes);
//     const [obj, setObj] = useState({
//         id: '',
//         prop1: '',
//         prop2: '',
//         prop3: ''
//     })
//     const [editId, setEditId] = useState(null)


//     const getValue = (prop) => {
//         if (editId) {
//             return notes.reduce((res, note) => note.id === editId ? note[prop] : res, '');
//         } else {
//             return obj[prop]
//         }
//     }

//     const changeItem = (prop, event) => {
//         if (editId) {
//             setNotes(notes.map(note =>
//                 note.id === editId ? { ...note, [prop]: event.target.value } : note
//             ));
//         } else {
//             setObj({ ...obj, [prop]: event.target.value });
//         }
//     }

//     const saveItem = () => {
//         if (editId) {
//             setEditId(null);
//         } else {
//             setNotes([...notes, obj]);
//             setObj({
//                 id: '',
//                 prop1: '',
//                 prop2: '',
//                 prop3: ''
//             });
//         }
//     }

//     return <div>
//         {notes.map(note => {
//             return <p key={note.id}>
//                 <span>{note.prop1}</span>,
//                 <span>{note.prop2}</span>,
//                 <span>{note.prop3}</span>

//                 <Button onClick={() => setEditId(note.id)}>edit</Button>
//             </p>
//         })}

//         <br />

//         <TextField
//             value={getValue('prop1')}
//             onChange={event => changeItem('prop1', event)}
//         />
//         <TextField
//             value={getValue('prop2')}
//             onChange={event => changeItem('prop2', event)}
//         />
//         <TextField
//             value={getValue('prop3')}
//             onChange={event => changeItem('prop3', event)}
//         />

//         <Button onClick={saveItem}>save</Button>
//     </div>;
// }
// TRAINING STATE

// const Task3 = () => {
//     const [visibleFirst, setVisibleFirst] = useState(false)
//     const [visibleSecond, setVisibleSecond] = useState(false)
//     const [visibleThird, setVisibleThird] = useState(false)

//     let firstElem
//     if (visibleFirst) {
//         firstElem = <Typography>text1</Typography>
//     }
//     let secondElem
//     if (visibleSecond) {
//         secondElem = <Typography>text2</Typography>
//     }
//     let thirdElem
//     if (visibleThird) {
//         thirdElem = <Typography>text3</Typography>
//     }
//     return (
//         <Box>
//             <Button onClick={() => setVisibleFirst(!visibleFirst)}>{visibleFirst ? 'hide' : 'show'}</Button>
//             <Button onClick={() => setVisibleSecond(!visibleSecond)}>{visibleSecond ? 'hide' : 'show'}</Button>
//             <Button onClick={() => setVisibleThird(!visibleThird)}>{visibleThird ? 'hide' : 'show'}</Button>

//             {firstElem}
//             {secondElem}
//             {thirdElem}
//         </Box>
//     )
// }
// const initProds = [
//     {
//         id: '1',
//         name: 'prod1',
//         cost: 'cost1',
//         desc: 'long description 1',
//         showDesc: false,
//         comm: 'my super comment 1',
//         showComm: false,
//     },
//     {
//         id: '2',
//         name: 'prod2',
//         cost: 'cost2',
//         desc: 'long description 2',
//         showDesc: false,
//         comm: 'my super comment 2',
//         showComm: false,
//     },
//     {
//         id: '3',
//         name: 'prod3',
//         cost: 'cost3',
//         desc: 'long description 3',
//         showDesc: false,
//         comm: 'my super comment 3',
//         showComm: false,
//     },
// ];
// const Task3 = () => {
//     const [prods, setProds] = useState(initProds)

//     const showComm = (id) => {
//         setProds(prods.map(prod => {
//             if (prod.id === id) {
//                 return { ...prod, showComm: !prod.showComm }
//             }
//             else {
//                 return prod
//             }

//         }))
//     }
//     const showDesc = (id) => {
//         setProds(prods.map(prod => {
//             if (prod.id === id) {
//                 return { ...prod, showDesc: !prod.showDesc }
//             }
//             else {
//                 return prod
//             }

//         }))
//     }
//     return (
//         <Box>
//             {prods.map(prod =>
//                 <Typography>
//                     {prod.name}/{prod.cost}/
//                     {prod.showComm ? prod.comm : ''}/
//                     {prod.showDesc ? prod.desc : ''}/
//                     {prod.showComm ? prod.comm : ''}

//                     <Button onClick={() => showDesc(prod.id)}>{prod.showDesc ? 'hide desc' : 'show desc'}</Button>

//                     < Button onClick={() => showComm(prod.id)}>{prod.showComm ? 'hide comm' : 'show comm'}</Button>


//                 </Typography >
//             )}
//         </Box >
//     )
// }
// const Task3 = () => {
//     const [value, setValue] = useState('text')
//     const [isEdit, setIsEdit] = useState(false)

//     let elem
//     if (isEdit) {
//         elem = <TextField value={value}
//             onChange={event => setValue(event.target.value)}
//         />
//     }
//     else {
//         elem = <span>{value}</span>
//     }
//     return (
//         <Box>
//             <Typography>
//                 {elem}
//                 <br />
//                 <Button onClick={() => setIsEdit(true)}>edit</Button>
//                 <Button onClick={() => setIsEdit(false)}>show</Button>
//             </Typography>
//         </Box>
//     )
// }
// const initNotes = [
//     { text: 'note1', isEdit: false },
//     { text: 'note2', isEdit: false },
//     { text: 'note3', isEdit: false },
// ]
// const Task3 = () => {
//     const [notes, setNotes] = useState(initNotes)
//     const [editState, setEditState] = useState(false)

//     const editor = () => {

//     }

//     const startEdit = (index) => {
//         const copy = Object.assign([], notes)
//         copy[index].isEdit = true
//         setNotes(copy)
//         console.log(editState);
//     }
//     const changeNote = (index, event) => {
//         const copy = Object.assign([], notes);
//         copy[index].text = event.target.value;
//         setNotes(copy);
//     }
//     const endEdit = (index) => {
//         const copy = Object.assign([], notes);
//         copy[index].isEdit = false
//         setNotes(copy)
//     }
//     return (
//         <Box>
//             {notes.map((note, index) => {
//                 let elem
//                 if (!note.isEdit) {

//                     elem = <span>
//                         {note.text}
//                         <Button onClick={() => startEdit(index)}>{note.isEdit ? 'show' : 'edit'}</Button>
//                     </span>

//                 }
//                 else {

//                     elem = <Box><TextField
//                         value={note.text}
//                         onChange={event => changeNote(index, event)}

//                     />
//                         <Button onClick={() => endEdit(index)}>{note.isEdit ? 'show' : 'edit'}</Button>
//                     </Box>
//                 }
//                 return <li key={index}>{elem}</li>

//             })}
//         </Box>
//     )
// }
const initNotes = [
    {
        id: '1',
        fields: [
            {
                name: 'prop1', value: 'value11',
                isEdit: false
            },
            {
                name: 'prop2', value: 'value12',
                isEdit: false
            },
            {
                name: 'prop3', value: 'value13',
                isEdit: false
            },
        ]
    },
    {
        id: '2',
        fields: [
            {
                name: 'prop1', value: 'value21',
                isEdit: false
            },
            {
                name: 'prop2', value: 'value22',
                isEdit: false
            },
            {
                name: 'prop3', value: 'value23',
                isEdit: false
            },
        ]
    },
    {
        id: '3',
        fields: [
            {
                name: 'prop1', value: 'value31',
                isEdit: false
            },
            {
                name: 'prop2', value: 'value32',
                isEdit: false
            },
            {
                name: 'prop3', value: 'value33',
                isEdit: false
            },
        ]
    },
]

const Task3 = () => {
    const [notes, setNotes] = useState(initNotes)

    const startEdit = (id, name) => {
        setNotes(notes.map(note => {
            if (note.id === id) {
                const fields = note.fields.map(field => {
                    if (field.name === name) {
                        return { ...field, isEdit: true }

                    }
                    else {
                        return field

                    }
                })
                return { id, fields }
            }
            else {
                return note
            }
        }))
    }

    const endEdit = (id, name) => {
        setNotes(notes.map(note => {
            if (note.id === id) {
                const fields = note.fields.map(field => {
                    if (field.name === name) {
                        return { ...field, isEdit: false }

                    }
                    else {
                        return field

                    }
                })
                return { id, fields }
            }
            else {
                return note
            }
        }))
    }

    const changeCell = (id, name, event) => {
        setNotes(notes.map(note => {
            if (note.id === id) {
                const fields = note.fields.map(field => {
                    if (field.name === name) {
                        return { ...field, value: event.target.value }

                    }
                    else {
                        return field

                    }
                })
                return { id, fields }
            }
            else {
                return note
            }
        }))
    }

    return (
        <Box>
            {notes.map(note => {
                const cells = note.fields.map(field => {
                    let elem
                    if (!field.isEdit) {
                        elem = <span onClick={() => startEdit(note.id, field.name)}>
                            {field.value}
                        </span>
                    }
                    else {
                        elem = <TextField
                            value={field.value}
                            onChange={(event) => changeCell(note.id, field.name, event)}
                            onBlur={() => endEdit(note.id, field.name)}
                        />
                    }
                    return <td key={field.name}>{elem}</td>
                })
                return <tr key={note.id}>{cells}</tr>
            })}
        </Box>
    )
}
// const startEdit = (id, name) => {
//     setNotes(notes.map(note => {
//         if (note.id === id) {
//             const fields = note.fields.map(field => {
//                 if (field.name === name) {
//                     return { ...field, isEdit: true }

//                 }
//                 else {
//                     return field

//                 }
//             })
//             return { id, fields }
//         }
//         else {
//             return note
//         }
//     }))
// }

// const endEdit = (id, name) => {
//     setNotes(notes.map(note => {
//         if (note.id === id) {
//             const fields = note.fields.map(field => {
//                 if (field.name === name) {
//                     return { ...field, isEdit: false }

//                 }
//                 else {
//                     return field

//                 }
//             })
//             return { id, fields }
//         }
//         else {
//             return note
//         }
//     }))
// }

// const changeCell = (id, name, event) => {
//     setNotes(notes.map(note => {
//         if (note.id === id) {
//             const fields = note.fields.map(field => {
//                 if (field.name === name) {
//                     return { ...field, value: event.target.value }

//                 }
//                 else {
//                     return field

//                 }
//             })
//             return { id, fields }
//         }
//         else {
//             return note
//         }
//     }))
// }
export default Task3