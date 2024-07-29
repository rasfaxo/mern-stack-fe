import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUser();
    },[])

    const getUser = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data)
    }

const deleteUser = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/users/${id}`)
        getUser();
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-700">User List</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/add">Add New User</Link>
          </button>
        </div>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">No</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Email</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Gender</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
            <tr key={user._id} className="bg-white even:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200">{index + 1}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.gender}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  <Link to={`/edit/${user._id}`}>Edit</Link>
                </button>
                <button onClick={()=> deleteUser(user._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
