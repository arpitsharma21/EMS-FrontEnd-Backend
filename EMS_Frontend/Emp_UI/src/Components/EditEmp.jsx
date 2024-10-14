import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmpService from '../Service/EmpService';

const EditEmp = () => {

    const [emp, setEmp] = useState({
        id:"",
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        salary: ""
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setEmp({ ...emp, [e.target.name]: value });
    }

    const [msg, setMsg] = useState("");

    const navigate = useNavigate();

    const updateEmp = (e) => {
        e.preventDefault();
        EmpService.updateEmp(emp.id).then((res) =>{
            navigate("/");
        }).catch((error) =>{
            console.log(error)
        })
    }

    const data = useParams();

    useEffect(() => {
        EmpService.getEmpById(data.id).then((res) => (
            setEmp(res.data)
        )).catch((error) => (
            console.log(error)
        ))
    }, [])

    return (
        <>
            <div className='container mt-2'>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header text-center fs-3">Edit Emp
                                {msg && <p className='text-success'>{msg}</p>}
                            </div>
                            <div className="card-body">
                                <form onSubmit={(e) => updateEmp(e)}>
                                    <div className="mb-3">
                                        <label >Enter First Name</label>
                                        <input type='text' className='form-control' name='firstName' value={emp.firstName}
                                            onChange={(e) => handleChange(e)} />
                                    </div>

                                    <div className="mb-3">
                                        <label >Enter Last Name</label>
                                        <input type='text' className='form-control' name='lastName' value={emp.lastName} onChange={(e) => handleChange(e)} />
                                    </div>

                                    <div className="mb-3">
                                        <label >Enter Email</label>
                                        <input type='email' className='form-control' name='email' value={emp.email} onChange={(e) => handleChange(e)} />
                                    </div>

                                    <div className="mb-3">
                                        <label >Enter Address</label>
                                        <input type='text' className='form-control' name='address' value={emp.address} onChange={(e) => handleChange(e)} />
                                    </div>

                                    <div className="mb-3">
                                        <label >Enter Salary</label>
                                        <input type='number' className='form-control' name='salary' value={emp.salary} onChange={(e) => handleChange(e)} />
                                    </div>

                                    <div className='text-center'>
                                        <button className='btn btn-success'>Update</button>
                                        <input type='Reset' className='btn btn-danger ms-2' value="Reset" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditEmp