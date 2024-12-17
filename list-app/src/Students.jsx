import React from 'react'
import ReactDOM from 'react-dom/client';
import {useState} from 'react'

function Students() {
    const[inputs, setInputs] = useState({
        fname: "",
        lname: "",
        gender: "",
        grade: ""
    })

    const [students, setStudents] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setStudents((prevStudents) => [...prevStudents, inputs]);
        setInputs({
            fname: "",
            lname: "",
            gender: "",
            grade: ""
        })
        setEditIndex(null);
    }

    const handleDelete = (index) => {
        setStudents(students.filter((_, i) => i !== index));
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label className={"firstNameLabel"}>
                    First Name:
                    <input type={"text"} name={"fname"}
                           value={inputs.fname || ""} onChange={handleChange}
                    />
                </label>
                <br/>

                <label>
                    Last Name:
                    <input type={"text"} name={"lname"}
                           value={inputs.lname || ""} onChange={handleChange}
                    />
                </label>
                <br/>

                <label>
                    Gender:
                    <input type={"text"} name={"gender"}
                           placeholder={"Female or Male"}
                           value={inputs.gender || ""} onChange={handleChange}
                    />
                </label>
                <br/>

                <label>
                    Grade:
                    <select name={"grade"} value={inputs.grade} onChange={handleChange}>
                        <option value={""}>Select Grade</option>
                        <option value={"9th grade"}>9th Grade</option>
                        <option value={"10th grade"}>10th Grade</option>
                        <option value={"11th grade"}>11th Grade</option>
                        <option value={"12th grade"}>12th Grade</option>
                    </select>
                </label>
                <br/>

                <input type={"submit"} value={"Submit"}/>
            </form>

            <h2>Students:</h2>
            <table>
                <tr bgcolor={"teal"}>
                    <th>Student Name</th>
                    <th>Gender</th>
                    <th>Grade</th>
                    <th>Delete</th>
                </tr>
                {students.map((student, index) => (
                    <tr key={index}
                        bgcolor={"lightblue"}
                        onMouseEnter={(e) => e.target.style.backgroundColor = "yellow"}
                        onMouseLeave={(e) => e.target.style.backgroundColor = "lightblue"}

                    >
                        <td>{student.fname} {student.lname}</td>
                        <td>{student.gender}</td>
                        <td>{student.grade}</td>
                        <td>
                            <button onClick={() => handleDelete(index)}
                            >Delete</button>
                        </td>
                    </tr>
                ))}
            </table>
        </>
    );

}

export default Students