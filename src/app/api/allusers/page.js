import Link from 'next/link';
import React from 'react';
async function getAllUsers() {
    let data=await fetch("http://localhost:3000/api/users");
    data=await data.json();
    // return data;
    return data;
}
const page = async() => {
    const allUsers=await getAllUsers()
    console.log(allUsers)
    return (
        <div>
            <h2>all users list</h2>
            {
                allUsers.map((allUser)=>(
                    <div key={allUser.id}>
                       
                        <Link href={`/api/allusers/${allUser.id}`}>{allUser.name}</Link>
                    </div>
                ))
            }
            
        </div>
    );
};

export default page;