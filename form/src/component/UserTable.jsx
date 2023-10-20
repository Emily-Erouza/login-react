import {useState} from 'react'
import LoginForm from "./LoginForm";
import DisplayRecords from './DisplayRecords';

function UsersTable() {
  const [user] = useState({name:"",surname:""}); 
  const [users , setUsers] = useState([{
    name: "Thabo",
    surname: "Kagiso"
  },
  {
    name: "Tau",
    surname: "Sbu"
  }
])


const addUser = (user) => {
  console.log(user)  
  setUsers([...users, user])
}

const deleteUser = (user , index) => {
  console.log(user)
  const filteredList = users.filter((user, userIndex) => userIndex !== index);
  console.log(filteredList)
  setUsers(filteredList)
}


  return (
    <div className="App">
      < LoginForm record={user} addRecord={addUser}/>
      <DisplayRecords deleteRecord={deleteUser} records={users} />
    </div>
  );
}

export default UsersTable;
