import React from 'react'

const Home = () => {
    return (
        <>
            <div>
                <h1 className='text-center mt-3'>EMP System</h1>
            </div>

            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Sr. No</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Home