// import { useEffect , useState} from "react";

// function DisplayRecords({ records, deleteRecord }) {
//     const [recordKeys, setRecordKeys] = useState([]);


//     useEffect(() => {
//         getKeys(records)
//     }, [])


//     const getKeys = (records) => {
//         console.log(Object.keys(records[0]));
//         setRecordKeys(Object.keys(records[0]))
//     } 

//     return (
//         <div>
//             {records.map((record, index) =>
//                 <div onClick={() => deleteRecord(record , index)} style={{ display: "grid", margin: "1rem", gridTemplateColumns: "repeat(4 , 1fr)" }} >
//                    <label> {recordKeys[0]} </ label> <div style={{ margin: "0rem 2rem" }}>{recordKeys.length === 0 ? null : record[recordKeys[0]]} </div>
//                    <label> {recordKeys[1]} </ label> <div style={{ margin: "0rem 2rem" }}>{recordKeys.length === 0 ? null : record[recordKeys[1]]} </div>
//                 </div>)}
//         </div>
//     );
// }

// export default DisplayRecords;
import { useEffect, useState } from "react";

function DisplayRecords({ records, deleteRecord }) {
  const [recordKeys, setRecordKeys] = useState([]);

  useEffect(() => {
    if (records.length > 0) {
      // Move the getKeys function inside the useEffect and add records as a dependency
      const getKeys = () => {
        console.log(Object.keys(records[0]));
        setRecordKeys(Object.keys(records[0]));
      };
      getKeys();
    }
  }, [records]);

  return (
    <div>
      {records.map((record, index) => (
        <div
          key={index} // Add a unique key prop to each record
          onClick={() => deleteRecord(record, index)}
          style={{
            display: "grid",
            margin: "1rem",
            gridTemplateColumns: "repeat(4, 1fr)"
          }}
        >
          {recordKeys.map((key) => ( // Map over recordKeys to display all keys
            <div key={key}>
              <label>{key}</label>
              <div style={{ margin: "0rem 2rem" }}>
                {record[key]}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DisplayRecords;
