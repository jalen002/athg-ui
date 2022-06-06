import React, { useState } from 'react';
import { FormGroup, FormLabel, FormControl, Button, Input, InputLabel, FormHelperText } from '@material-ui/core';

const HospitalForm = (props) => {
  const [hospital, setHospital] = useState({
    hospitalname: props.hospital ? props.hospital.hospitalname : '',
    director: props.hospital ? props.hospital.director : '',
    // address: props.hospital ? props.hospital.address : '',
    // employees: props.hospital ? props.hospital.employees : []
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { hospitalname, director } = hospital;
  // const { hospitalname, director, address, employees } = hospital;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [hospitalname, director];
    // const values = [hospitalname, director, address, employees];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const hospital = {
        hospitalname,
        director,
        // address,
        // employees
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
            <Input id="hospitalname" name="hospitalname" onChange={handleInputChange}/>
            <FormHelperText id="hospitalname-helper-text">Name of the Hospital</FormHelperText>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl>
            <InputLabel>Hospital Director</InputLabel>
            <Input id="director" name="director" onChange={handleInputChange}/>
            <FormHelperText id="director-helper-text">Name of the Hospital Director</FormHelperText>
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