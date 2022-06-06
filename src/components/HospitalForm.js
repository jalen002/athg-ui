import React, { useState } from 'react';
import { FormGroup, FormControl, Button, Input, InputLabel, FormHelperText } from '@material-ui/core';

const HospitalForm = (props) => {
  const [hospital, setHospital] = useState({
    name: props.hospital ? props.hospital.name : '',
    director: props.hospital ? props.hospital.director : '',
    address: props.hospital ? props.hospital.address : '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { name, director, address } = hospital;

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
            <FormHelperText id="name-helper-text">Name of the Hospital</FormHelperText>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl>
            <InputLabel>Director</InputLabel>
            <Input id="director" name="director" onChange={handleInputChange} value={director}/>
            <FormHelperText id="director-helper-text">Name of the Hospital Director</FormHelperText>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl>
            <InputLabel>Address</InputLabel>
            <Input id="address" name="address" onChange={handleInputChange} value={address}/>
            <FormHelperText id="director-helper-text">Address</FormHelperText>
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