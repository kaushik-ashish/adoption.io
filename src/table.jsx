import React, { useState } from 'react';
  
function AdoptionForm(props) {
  const [name, setName] = useState('');
  const [gname, setNameg] = useState('');
  const [price, setprice] = useState('');
  
  const changeName = (event) => {
    setName(event.target.value);
  };
  
  const changeNameg = (event) => {
    setNameg(event.target.value);
  };

  const changeprice = (event) => {
    setprice(event.target.value);
  };
  
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      price,
    };
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setName('');
    setprice('');
  };
  
  return (
    <div>
        <h2>Add pet for adoption</h2>
        <label>
          
          <select>
            <option >Own for lifetime</option>
            <option >Adopt for 1 year</option>
            
          </select>
        </label>
        <br/>

      <label>Name</label>
      <input type="text" value={name} onChange={changeName} />
      <br/>
      <label>Given name</label>
      <input type="text" value={gname} onChange={changeNameg} />
      <br>
    
      </br>
      <label>Price $</label>
      <input type="number" value={price} onChange={changeprice} />
      <br>
      </br>
      <button onClick={transferValue}>Next </button>
      <br>
      </br>
      <button onClick={transferValue}>Cancel</button>
    </div>
  );
}
  
export default AdoptionForm;