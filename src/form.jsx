import React, { useState } from 'react';
import AdoptionForm from './form';
import jsonData from './data.json';
  
function TableData() {
  const [petData, setpetData] = useState(jsonData);
  
  const tableRows = petData.map((info) => {
    return (
      <tr>
        <td>{info.SNo}</td>
        <td>{info.Given_name}</td>
        <td>{info.pet_name}</td>
        <td>{info.price}</td>
        <td>{info.status}</td>
        
      </tr>
    );
  });
  
  const addRows = (data) => {
    const totalPets = petData.length;
    data.id = totalPets + 1;
    const updatedpetData = [...petData];
    updatedpetData.push(data);
    setpetData(updatedpetData);
  };
  
  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Given name</th>
            <th>Pet name</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <AdoptionForm func={addRows} />
    </div>
  );
}
  
export default TableData;