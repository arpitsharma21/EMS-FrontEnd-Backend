import React, { useEffect, useState } from 'react'
import EmpService from '../Service/EmpService'
import { Link } from 'react-router-dom'

const Home = () => {

    const [empList, setEmpList] = useState([]);

    useEffect(() => {
        EmpService.getAllEmp().then((res) => {
            console.log(res.data)
            setEmpList(res.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <>
            <div>
                <h1 className='text-center mt-3'>EMP System</h1>
            </div>

            <div className='container'>
                <table class="table mt-5 ">
                    <thead className='bg-light'>
                        <tr>
                            <th scope="col">Sr. No</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {empList.map((e,num) => (
                            <tr>
                                <td>{num +1 }</td>
                                <td>{e.firstName}</td>
                                <td>{e.lastName}</td>
                                <td>{e.address}</td>
                                <td>{e.email}</td>
                                <td>{e.salary}</td>
                                <td className='m-2'>
                                    <Link to= {'/editEmp/'+e.id} className='btn btn-sm btn-primary m-2'>Edit</Link>
                                    <a className='btn btn-sm btn-danger'>Delete</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Home