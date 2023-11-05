async function getAllUser(id) {
    let data=await fetch(`http://localhost:3000/api/users/${id}`);
    data=await data.json();
    return data.result;
}

const page =async ({params}) => {
    console.log(params)
    const singleUser=await getAllUser(params.alluserid);
    console.log('sin',singleUser)
    return (
        <div>
            <h2>this is all user details page</h2>
            <h5>name:{singleUser.name}</h5>
            
            
        </div>
    );
};

export default page;