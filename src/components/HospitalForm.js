import React, { useState } from 'react';
import { FormGroup, FormControl, Button, Input, InputLabel, FormHelperText } from '@material-ui/core';

const HospitalForm = (props) => {
  const [hospital, setHospital] = useState({
    id: props.hospital ? props.hospital.id : null,
    name: props.hospital ? props.hospital.name : '',
    director: props.hospital ? props.hospital.director : '',
    address: props.hospital ? props.hospital.address : '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { id, name, director, address } = hospital;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [name, director, address];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const hospital = {
        name,
        director,
        address
      };
      if (id != null){
        hospital.id = id;
      }
      props.handleOnSubmit(hospital);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setHospital((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <form onSubmit={handleOnSubmit}>
        <FormGroup>
          <FormControl>
            <InputLabel>Hospital Name</InputLabel>
            <Input id="name" name="name" onChange={handleInputChange} value={name}/>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl>
            <InputLabel>Director</InputLabel>
            <Input id="director" name="director" onChange={handleInputChange} value={director}/>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl>
            <InputLabel>Address</InputLabel>
            <Input id="address" name="address" onChange={handleInputChange} value={address}/>
          </FormControl>
        </FormGroup>
        <Button type="submit" className="submit-btn">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default HospitalForm;