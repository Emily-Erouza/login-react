import { useEffect , useState } from "react";
import React from 'react';
import convertToArray from "../functions/convertToArray";

function LoginForm({ addRecord , record }) {
  const [newRecord , setNewRecord] = useState({name:"",surname:""}); 
  const [formValues, setFormValues] = useState([]);



    useEffect(() => {
        const array = convertToArray(record);
        setFormValues(array)
    } , [record])


  const handleChange = (e) => {
    console.log(e.target.value)
    setNewRecord({...newRecord, [e.target.name]: e.target.value})
  }

  return (
    <div style={{display: "grid", margin:"1rem", gridTemplateColumns : "repeat(1 , 1fr)"}} className="Form">
        {formValues.map((value) => <div>
            <input style={{ margin: "1rem" }} type="text" name={Object.keys(value)[0]} 
            onChange={(e) => handleChange(e)} 
            placeholder={Object.keys(value)[0]}/>
        </div>)}
        <button onClick={() => addRecord(newRecord)}> save </button>
    </div>
  );
}

export default LoginForm;
